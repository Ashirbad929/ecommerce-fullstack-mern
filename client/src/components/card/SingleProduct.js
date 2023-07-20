import React from "react";
import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/viewproduct.css"; // Import the shared CSS file for styling

const { Meta } = Card;

const SingleProduct = ({ product }) => {
  const { title, price, images, description, brand, color } = product;

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
          actions={[<HeartOutlined />, <ShoppingCartOutlined />]}
          
        >
          <Meta
            title={title}
            description={description}
          />
          
          <div className="additional-details">
           
            <p className="product-brand">Brand: {brand}</p>
            <p className="product-color">Color: {color}</p>
            <p className="product-price">Price: ${price}</p>
           
            
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
