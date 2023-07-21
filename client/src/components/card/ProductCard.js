import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/productcard.css';

const { Meta } = Card;

const ProductCard = ({ product, loading }) => {
  const navigate=useNavigate();
  const { title, description, images, slug ,price} = product;
  const imageUrl = images && images.length ? images[0][0].url : '';

  return (
    <Card
      hoverable
      
      cover={<img src={imageUrl} alt={title} />}
      loading={loading}
      actions={[<Link to={`/product/${slug}`}><EyeOutlined /> <br /> view</Link>, <Link to="/"><ShoppingCartOutlined /> <br />Add to cart</Link>]}
      className="product-card"
    >
      {/* shorten the description using substring below */}
      <Meta title={title}  description={`${description && description.substring(0,40)}...`} /> 
      {/* another meta tag for price */}
      <Meta title={`price:$${price}`}   /> 
    </Card> 
  );
}

export default ProductCard;
