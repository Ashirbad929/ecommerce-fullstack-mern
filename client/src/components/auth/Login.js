import React, { useState } from 'react';
import { Input, Typography, Button, message, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../../config-firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../../store/slices/usersSlice';
import { createOrUpdateUser } from '../../ApiFunctions/auth';



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const roleBasedRedirect = (res) => {
    if (res.data.role === 'subscriber') {
      navigate('/user/history');
    } else {
      navigate('/admin/dashboard');
    }
  };
  const handleLogin = async () => {
    if (!email || !password) {
      message.error('Please enter email and password');
      return;
    }

    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { user } = res;
      const idTokenResult = await user.getIdTokenResult();
      const idtoken = idTokenResult.token;
      console.log('token: ' + idtoken);
      createOrUpdateUser(idtoken)
        .then((res) => {
          dispatch(
            loggedInUser({
              email: res.data.email,
              idtoken: idtoken,
              name: res.data.name,
              role: res.data.role,
              _id: res.data._id,
            })
          );
          roleBasedRedirect(res);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      message.error(error.message);
    }

    setLoading(false);
  };

  

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2em',
        backgroundColor: 'whitesmoke',
        position: 'relative',
      }}
    >
     

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '2em',
          backgroundColor: '#FAFAD2',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          minHeight: '400px',
          
        }}
      >
        <Typography.Title level={4} style={{ marginBottom: '2em', textAlign: 'center' }}>
          Login
        </Typography.Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '1em' }}
          />
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '1em' }}
          />
          <Button type="primary" htmlType="submit" disabled={!email || !password} style={{ width: '100%', textTransform: 'none' }}>
            {loading ? <Spin /> : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
