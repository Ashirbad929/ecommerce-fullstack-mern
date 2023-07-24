import React, { useState, useEffect } from "react";
import { Card, Typography, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import "../../css/productcard.css";

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ product, loading }) => {
  const navigate = useNavigate();
  const { title, description, images, slug, price } = product;
  const imageUrl = images && images.length ? images[0][0].url : "";

 
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading state for 2 seconds and then display the actual card for better attractive feeling :)
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    // Clean up 
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Card
    
      hoverable
      loading={loading || showLoading} // Show loading state if either loading prop or showLoading is true :)
      cover={
        //wohoooooooo
        /* this logic to show loading image skeleton and loading card syncronyously so that one will not appear first both will appear together :) :)*/
        loading || showLoading ? ( // Use Skeleton.Image if in the loading state    
          <Skeleton.Image
            style={{ width: "100%", height: "auto", paddingBottom: "60%" }}
          />
        ) : (
          <img src={imageUrl} alt={title} /> // Show the actual image when not in the loading state
        )
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined /> <br /> view
        </Link>,
        <Link to="/">
          <ShoppingCartOutlined /> <br />
          Add to cart
        </Link>,
      ]}
      className="product-card"
    >
      {/* shorten the description using substring below */}
      <Meta
        title={title}
        description={`${description && description.substring(0, 35)}...`}
      />
      {/* another meta tag for price */}
      <Meta title={<Text style={{ color: "#008080" }}>₹{price}</Text>} />
    </Card>
  );
};

export default ProductCard;
