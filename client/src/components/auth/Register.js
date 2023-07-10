import React, { useState } from 'react';
import { Input, Typography, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { auth} from '../../config-firebase/firebase';
import { sendSignInLinkToEmail } from 'firebase/auth';

const { Title } = Typography;

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      message.error('Invalid email format');
      return;
    }

    try {
      // Send sign-in link to the provided email
      window.localStorage.setItem('emailForRegistration',email)
      await sendSignInLinkToEmail(auth, email, {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true,
      });

      // Display success message
      message.success(`Email sent successfully to ${email}`);
      

      // Handle form submission logic or navigation to the next page
    } catch (error) {
      // Display error message
      message.error(`Error sending email. Please try again later. Error: ${error.message}`);

      // Handle error if sending sign-in link fails
      console.log('Error:', error);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2em' }}>
      <Title level={2}>Shopify</Title>

      <div style={{ width: '100%', maxWidth: '600px', padding: '2em', backgroundColor: '#FAFAD2', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', minHeight: '400px' }}>
        <Title level={4} style={{ marginBottom: '2em', textAlign: 'center' }}>
          Email Link
        </Title>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '1em' }}
          />
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
