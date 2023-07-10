import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./config-firebase/firebase";
import { loggedInUser } from "./store/slices/usersSlice";
import "./App.css";
import Passwordadmin from "./pages/admin/password";
import Appbar from "./components/Appbar/Appbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RegisterComplete from "./components/auth/RegisterComplete";
import { currentAdmin, currentUser } from "./ApiFunctions/auth";

import { selectuser } from "./store/slices/usersSlice";
import { useSelector } from "react-redux";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/CategoryCreate";
function App() {
 
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
 
  const [ok,setOk]=useState(false)
  useEffect(()=>{
    if(user && user.token){
      currentAdmin(user.token)
      .then(res=>{
        console.log('current admin res',res)
        setOk(true)

      })
      .catch(err=>{
        console.log("Admin route error",err)
      })
    }
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log(user);
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch(
              loggedInUser({
                name: res.data.name,
                email: res.data.email,
                idtoken: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              })
            );
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        
        {!user&&<Route path="/login" element={<Login />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        {user?<Route path="user/history" element={<History/>} />:(<></>)}
        {user?<Route path="user/password" element={<Password/>} />:(<></>)}
        {user?<Route path="admin/password" element={<Passwordadmin/>} />:(<></>)}
        {user?<Route path="user/wishlist" element={<Wishlist/>} />:(<></>)}
        {user && user.role==='admin'? <Route path="/admin/dashboard" element={<AdminDashboard/>} />:(<></>)}
        {user && user.role==='admin'? <Route path="/admin/category" element={<CategoryCreate/>} />:(<></>)}
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
