import React from 'react';
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const { Meta } = Card;

const AdminDashCard = ({ product, loading }) => {
  const { title, description, images } = product;
  const imageUrl = images && images.length ? images[0][0].url : '';

  console.log('Image URL:', imageUrl);

  return (
    <Card
      hoverable
     
      cover={<img src={imageUrl} alt={title} style={{ height: '200px', objectFit: 'cover' }} />}
      loading={loading}
      actions={[<DeleteOutlined/>,<EditOutlined/>]}
    >
      
        <Meta title={title} description={description}  />
      
    </Card>
  );
};

export default AdminDashCard;
