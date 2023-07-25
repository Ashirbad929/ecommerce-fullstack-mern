import { Layout } from 'antd';
import '../css/footer.css'
import React from 'react';
const { Footer } = Layout;
const MyFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <p>About</p>
        <p>
          A full-stack e-commerce website built with MERN stack and Ant Design UI.
          Features include advanced search, payments with Stripe, wishlist/cart management,
          invoice PDFs, and Firebase authentication.
        </p>
        <p>
          Ideal for learning MERN stack and full-stack development.
        </p>
        <p>&copy; {new Date().getFullYear()} Ashirbad Behera. All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default MyFooter;
