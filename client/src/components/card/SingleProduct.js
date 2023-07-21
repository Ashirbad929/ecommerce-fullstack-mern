import React from "react";
import { Card, Tabs, Tooltip } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/viewproduct.css"; // Import the shared CSS file for styling
import StarRating from "react-star-ratings";
import { showAverage } from "../../ApiFunctions/rating";
import RatingModal from "../modal-rating/RatingModal";

const { Meta } = Card;
const { TabPane } = Tabs;
//children component
const SingleProduct = ({ product,onStarclick,star }) => {
  const { title, price, images, description, brand, color, _id } = product;

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="view-product">
      <div className="images-carousel">
        <Carousel showArrows={true} autoPlay infiniteLoop>
          {images.map((imageArray, index) => (
            <div key={index}>
              {imageArray.map((image) => (
                <img
                  className="product-images"
                  src={image.url}
                  key={image.public_id}
                  alt={title}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="card-details">
        <Card
          actions={[
            <div>
              <HeartOutlined
                style={{ color: "red", fontSize: "1.3rem" }}
                title="wishlist"
              />
              <br />
              wishlist
            </div>,
            <div>
              <ShoppingCartOutlined
                style={{ color: "green", fontSize: "1.3rem" }}
                title="add to cart"
              />
              <br /> add to cart
            </div>,
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarclick}
                starRatedColor="#FFD700"
                starEmptyColor="#D3D3D3"
                starDimension="20px" // Adjust this value to change the size of stars
                starSpacing="2px" // Adjust this value to set the spacing between stars
              />
            </RatingModal>,
          ]}
        >
          <div>
           
           {product && product.ratings && product.ratings.length>0 ?showAverage(product):"(NO RATINGS YET)"}
          </div>
          <Meta title={title} description={description} />

          <div className="additional-details">
            <p className="product-brand">Brand: {brand}</p>
            <p className="product-color">Color: {color}</p>
            <p className="product-price">Price: ${price}</p>
            <Tabs type="card">
              <TabPane tab="About" key="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                suscipit possimus nisi nihil quibusdam dicta consequatur! Harum,
                repellat! Voluptas sint modi in sapiente repudiandae eligendi.
                Nemo numquam optio assumenda quasi! Hic quibusdam recusandae
                inventore voluptatem qui atque maxime fuga! Sequi saepe earum
                accusantium culpa delectus perspiciatis nisi laborum fuga cumque
                praesentium tenetur earum, at quo quasi minus nesciunt aliquam
                ipsa est explicabo! Magni, ipsum? Reiciendis nobis adipisci hic
                ex iste quas.
              </TabPane>
              <TabPane tab="More" key="2">
                Call us xxxx7xxx
              </TabPane>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
