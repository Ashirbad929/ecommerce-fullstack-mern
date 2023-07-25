import React from "react";
import { Card, Tabs, Tooltip, message } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/viewproduct.css"; // Import the shared CSS file for styling
import StarRating from "react-star-ratings";
import { showAverage } from "../../ApiFunctions/rating";
import RatingModal from "../modal-rating/RatingModal";

import lodash from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Addtocart } from "../../store/slices/cartSlice";
import { addtoWishlist } from "../../ApiFunctions/user";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const { TabPane } = Tabs;

//children component
const SingleProduct = ({ product, onStarclick, star, loading }) => {
  const user=useSelector((state)=>state.user.userid)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")); // parse the string into an array
      }

      cart.push({
        ...product,
        count: 1,
      });

      // remove duplicates
      let unique = lodash.uniqWith(cart, lodash.isEqual);
      console.log("unique", unique);

      localStorage.setItem("cart", JSON.stringify(unique)); // store JSON in storage so JSON.stringify used :)
      // add to redux state
      dispatch(Addtocart(cart));
    }
    message.info("Added to cart")
  };
  const { title, price, images, description, brand, color, _id } = product;

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }
const handleAddTowishlist=(e)=>{
  if(user){ 
    addtoWishlist(user.idtoken,product._id).
    then(res=>{
    
    message.success("Added to wishlist")
    navigate('/user/wishlist')
    
    
  })}
 

}
console.log("deqda",user && user.idtoken)
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
          loading={loading}
          actions={[
            <div>
              <a onClick={handleAddTowishlist}>
              <HeartOutlined 
                style={{ color: "red", fontSize: "1.3rem" }}
                title="wishlist"
              />
              <br />
              Wishlist
              </a>
              
              
              
            </div>,
            <div>
              <a onClick={handleAddToCart}>
                <ShoppingCartOutlined
                  style={{ color: "green", fontSize: "1.3rem" }}
                  title="add to cart"
                />
                <br /> add to cart
              </a>
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
            {product && product.ratings && product.ratings.length > 0
              ? showAverage(product)
              : "(NO RATINGS YET)"}
          </div>
          <Meta title={title} />

          <div className="additional-details">
            <p className="product-brand">Brand: {brand}</p>
            <p className="product-color">Color: {color}</p>
            <p style={{ color: "#008080" }} className="product-price">
              Price: ₹{price}
            </p>
            <Tabs type="card">
              <TabPane tab="About" key="1">
                {description}
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
