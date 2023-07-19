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
  const userId = useSelector(selectuser);
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
    <Menu onClick={handleMenuClose}>
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
        backgroundColor: "#F0F2F5",
        padding: "1em",
        color: "#333333",
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
    {userId && (<span style={{fontSize:"12px" ,marginRight:'0'}}>
      {userId.name}
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
            color: "#333333",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <MenuOutlined style={{ color: "#333333" }} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default AppbarMobile;
