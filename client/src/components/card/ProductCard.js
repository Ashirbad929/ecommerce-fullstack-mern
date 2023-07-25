import React, { useState, useEffect } from "react";
import { Card, Typography, Skeleton,message } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import lodash from 'lodash'
import { Addtocart } from "../../store/slices/cartSlice";
import "../../css/productcard.css";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../store/slices/drawerSlice";

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ product, loading }) => {
  const dispatch=useDispatch()
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== 'undefined') {
      // if cart is in local storage
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart')); // parse the string into an array
      }
    
      cart.push({
        ...product,
        count: 1,
      });
    
      // remove duplicates
      let unique = lodash.uniqWith(cart, lodash.isEqual);
      console.log('unique', unique);
    
      localStorage.setItem('cart', JSON.stringify(unique)); // store JSON in storage so JSON.stringify used :)
      // add to redux state
      dispatch(Addtocart(cart))
      //show cart items in drawer
      dispatch(openDrawer(true))

    }
    message.info("Added to cart")
  };
  const navigate = useNavigate();
  const { title, description, images, slug, price } = product;
  const imageUrl = images && images.length ? images[0][0].url : "";


  
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading state for 2 seconds and then display the actual card for a better attractive feeling :)
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 800);

    // Clean up 
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Card
      hoverable
      loading={loading || showLoading} // Show loading state if either loading prop or showLoading is true :)
      cover={
        //wohoooooooo
        /* this logic to show loading image skeleton and loading card synchronously so that one will not appear first, both will appear together :) :)*/
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
        <a onClick={handleAddToCart}>
          <ShoppingCartOutlined /> <br />
          Add to cart
        </a>,
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
