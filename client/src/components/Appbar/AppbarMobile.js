import React, { useState } from "react";
import { Button, Input, Typography, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  SolutionOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loggOutUser } from "../../store/slices/usersSlice";
import { selectuser } from "../../store/slices/usersSlice";
import { auth } from "../../config-firebase/firebase";

const AppbarMobile = () => {
  const userId = useSelector((state)=>state.user.userid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const handleLogout = async () => {
    const res = await auth.signOut();
    dispatch(loggOutUser(null));
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const menu = (
    <Menu style={{backgroundColor:"white"}} onClick={handleMenuClose}>
      {userId && (
        <Menu.Item key="dashboard">
          <DashboardOutlined />
          {userId.role === "subscriber" ? (
            <Link to="/user/history">Dashboard</Link>
          ) : (
            <Link to="/admin/dashboard">Dashboard</Link>
          )}
        </Menu.Item>
      )}
      <Menu.Item key="home"> 
      
      
      
      <Link to='/home'>
      <HomeOutlined />
        Home</Link>
    
      
       
      </Menu.Item>
      <Menu.Item key="cart">
      
      
     
        <Link to='/cart'> <ShoppingCartOutlined/>cart</Link>
      
      </Menu.Item>
      { userId && (
         <Menu.Item key="logout">
      
      
     
         <Link onClick={handleLogout}> <LogoutOutlined/>logout</Link>
       
       </Menu.Item>
      )
      
      }
      { !userId && (
         <Menu.Item key="logIn">
      
      
     
         <Link to='/login'> <LogoutOutlined/>logIn</Link>
       
       </Menu.Item>
      )
      
      }

     
      
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2em",
        alignItems: "center",
        backgroundColor: "black",
        padding: "1em",
        color: "white",
        border: "1.5px solid black",
        maxHeight: "100vh",
      }}
    >
      <Button
        onClick={() => navigate("/shop")}
        style={{
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <Typography.Title
          level={3}
          style={{
            color: "#0492C2",
            textTransform: "none",
            fontFamily: "monospace",
            margin: 0,
          }}
        >
          Fetch
        </Typography.Title>
      </Button>

      <div style={{ flex: 1 }} />
    {userId && (<span style={{fontSize:"10px" }}>
    {`${userId.email.split("@")[0].substring(0,10)}..`}
    </span>)}

      <Dropdown
        overlay={menu}
        trigger={["click"]}
        visible={menuVisible}
        onVisibleChange={handleMenuClick}
       
      >
        <Button
          style={{
            display: "flex",
            gap: "0.5em",
            alignItems: "center",
            color: "white",
            backgroundColor: "black",
            border: "none",
          }}
        >
          <MenuOutlined style={{ color: "white" }} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default AppbarMobile;
