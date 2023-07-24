import React, { useState, useEffect } from 'react';
import { Button, Input, Typography } from 'antd';
import { auth } from '../../config-firebase/firebase';
import { signInWithEmailLink, updatePassword } from 'firebase/auth';
import { loggedInUser } from '../../store/slices/usersSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrUpdateUser } from '../../ApiFunctions/auth';

const { Title } = Typography;

const RegisterComplete = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
    
  }, []);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // password validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    try {
      const res = await signInWithEmailLink(auth, email, window.location.href);
      if (res.user.emailVerified) {
        window.localStorage.removeItem('emailForRegistration');
        let user = auth.currentUser;
        await updatePassword(user, password);
        const idTokenResult = await user.getIdTokenResult();
        const idToken = idTokenResult.token;
        createOrUpdateUser(idToken)
          .then((res) => {
            dispatch(
              loggedInUser({ email: res.data.email, idToken: idToken, name: res.data.name, role: res.data.role, _id: res.data._id })
            );
          })
          .catch((error) => console.log(error));
        navigate('/');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: 'whitesmoke',
      }}
    >
   <Title level={2}>Fetch</Title>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '2rem',
          backgroundColor: '#FAFAD2',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          minHeight: '400px',
        }}
      >
        <Title level={4} style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Register
        </Title>
        <Input type='email' value={email} style={{marginBottom:"1em"}} disabled={true}></Input>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '2rem' }} />
        <ToastContainer position="top-right" autoClose={5000} />
        <Button type="primary" onClick={handleSubmit} block>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RegisterComplete;
