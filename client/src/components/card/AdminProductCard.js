import React from 'react';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
const { Meta } = Card;

const AdminProductCard = ({ product, loading ,handleRemove}) => {
  const { title, description, images,slug } = product;
  const imageUrl = images && images.length ? images[0][0].url : '';
  console.log(slug)
  console.log('Image URL:', imageUrl);

  return (
    <Card
      hoverable
     
      cover={<img src={imageUrl} alt={title} style={{ height: '200px', objectFit: 'cover' }} />}
      loading={loading}
      actions={[<DeleteOutlined onClick={()=>handleRemove(slug)}/>,<Link to={`/admin/product/${slug}`}><EditOutlined/></Link>]}
    >
      
        <Meta title={title} description={description}  />
      
    </Card>
    
  );
};

export default AdminProductCard;
