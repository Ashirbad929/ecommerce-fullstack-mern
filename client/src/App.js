import React, { useEffect, useState,lazy,Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux"; 
import { useSelector } from "react-redux";
import { auth } from "./config-firebase/firebase";
import { loggedInUser } from "./store/slices/usersSlice";
import { currentAdmin, currentUser } from "./ApiFunctions/auth";
const Shop = lazy(() => import("./pages/Shop"));
const Passwordadmin = lazy(() => import("./pages/admin/password"));
const Appbar = lazy(() => import("./components/Appbar/Appbar"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const RegisterComplete = lazy(() => import("./components/auth/RegisterComplete"));
const ProductCreate = lazy(() => import("./pages/product/ProductCreate"));
const Cart = lazy(() => import("./pages/Cart"));
const History = lazy(() => import("./pages/user/History"));
const Password = lazy(() => import("./pages/user/Password"));
const Wishlist = lazy(() => import("./pages/user/Wishlist"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const CategoryCreate = lazy(() => import("./pages/admin/CategoryCreate"));
const CategoryUpdate = lazy(() => import("./pages/admin/CategoryUpdate"));
const SubCreate = lazy(() => import("./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(() => import("./pages/admin/sub/SubUpdate"));
const AllProducts = lazy(() => import("./pages/product/Allproducts"));
const ProductUpdate = lazy(() => import("./pages/product/ProductUpdate"));
const Home = lazy(() => import("./pages/Home"));
const ViewProduct = lazy(() => import("./pages/ViewProduct"));
const CategoryHome = lazy(() => import("./components/category/CategoryHome"));
const SubHome = lazy(() => import("./components/sub/SubHome"));
const Siddedrawer = lazy(() => import("./components/drawer/Siddedrawer"));
const Checkout = lazy(() => import("./pages/Checkout"));
function App() {
 
 
  const user = useSelector((state)=>state.user.userid);
  

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
 
  const dispatch = useDispatch();

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
  console.log("selectUser",user)
  return (
    <Suspense fallback={<p>loading...</p>}>
      <div>
      <BrowserRouter>
        <Appbar />
        <Siddedrawer/>
        <Routes>
          {/* public routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/register/complete" element={<RegisterComplete />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryHome />} />
          <Route path="/sub/:slug" element={<SubHome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

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
    </Suspense>
    
  );
}

export default App;
