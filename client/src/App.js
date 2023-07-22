import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./config-firebase/firebase";
import { loggedInUser } from "./store/slices/usersSlice";

import Passwordadmin from "./pages/admin/password";
import Appbar from "./components/Appbar/Appbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RegisterComplete from "./components/auth/RegisterComplete";
import { currentAdmin, currentUser } from "./ApiFunctions/auth";
import ProductCreate from "./pages/product/ProductCreate";
import { selectuser } from "./store/slices/usersSlice";
import { useSelector } from "react-redux";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/CategoryCreate";
import CategoryUpdate from "./pages/admin/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import AllProducts from "./pages/product/Allproducts";
import ProductUpdate from "./pages/product/ProductUpdate";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import CategoryHome from "./components/category/CategoryHome";
import SubHome from "./components/sub/SubHome";
function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then((res) => {
          console.log("current admin res", res);
          setOk(true);
        })
        .catch((err) => {
          console.log("Admin route error", err);
        });
    }
  });

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
  console.log("App");
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* public routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryHome />} />
          <Route path="/sub/:slug" element={<SubHome />} />

          <Route path="/product/:slug" element={<ViewProduct />} />
          {/* protected user routes */}

          {!user && <Route path="/login" element={<Login />} />}

          {user ? <Route path="user/history" element={<History />} /> : <></>}
          {user ? <Route path="user/password" element={<Password />} /> : <></>}

          {user ? <Route path="user/wishlist" element={<Wishlist />} /> : <></>}
          {/* protected admin routes */}
          {user && user.role === "admin" ? (
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/category" element={<CategoryCreate />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/sub" element={<SubCreate />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/sub/:slug" element={<SubUpdate />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/category/:slug" element={<CategoryUpdate />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/product" element={<ProductCreate />} />
          ) : (
            <></>
          )}
          {user && user.role === "admin" ? (
            <Route path="/admin/products" element={<AllProducts />} />
          ) : (
            <></>
          )}
          {user && user.role == "admin" ? (
            <Route path="admin/password" element={<Passwordadmin />} />
          ) : (
            <></>
          )}
          {user && user.role == "admin" ? (
            <Route path="admin/product/:slug" element={<ProductUpdate />} />
          ) : (
            <></>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
