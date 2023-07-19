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
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ecommlogo from "../../images/ecommlogo.jpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loggOutUser } from "../../store/slices/usersSlice";
import { selectuser } from "../../store/slices/usersSlice";
import { auth } from "../../config-firebase/firebase";

const AppbarDesktop = () => {
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
  const handleLinkClick = (path) => {
    navigate(path);
  };

  const menu = (
    <Menu onClick={handleMenuClose}>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
      <Menu.Item>
        <DashboardOutlined />
        {userId && userId.role === "subscriber" ? (
          <Link to="/user/history">Dashboard</Link>
        ) : (
          <Link to="/admin/dashboard">Dashboard</Link>
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2em",
        alignItems: "center",
        backgroundColor: "#F0F2F5", // Change the background color to a slightly darker shade
        border: "none",
        padding: "1em",
        color: "#333333", // Change the text color
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
            color: "#0492C2", // Change the title color
            textTransform: "none",
            fontFamily: "monospace",
            margin: 0,
          }}
        >
          Fetch
        </Typography.Title>
      </Button>

      <Button
        onClick={() => navigate("/home")}
        style={{
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          const bar = target.querySelector(".hover-bar");
          bar.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          const bar = target.querySelector(".hover-bar");
          bar.style.opacity = "0";
        }}
      >
        <HomeOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
        <Typography.Text
          style={{
            color: "#333333",
            textTransform: "none",
            fontFamily: "Rosemary",
            fontSize: "15px",
          }}
        >
          Home
        </Typography.Text>
        <div
          className="hover-bar"
          style={{
            position: "absolute",
            bottom: "-3px",
            left: "0",
            right: "0",
            width: "100%",
            height: "3px",
            backgroundColor: "#1890ff",
            opacity: "0",
            transition: "opacity 0.3s",
          }}
        ></div>
      </Button>

      <Button
        onClick={() => navigate("/cart")}
        style={{
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          const bar = target.querySelector(".hover-bar");
          bar.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          const bar = target.querySelector(".hover-bar");
          bar.style.opacity = "0";
        }}
      >
        <ShoppingCartOutlined
          style={{ color: "#1890ff", fontSize: "20px" }}
        />
        <Typography.Text
          style={{
            color: "#333333",
            fontFamily: "Rosemary",
            textTransform: "none",
          }}
        >
          Cart
        </Typography.Text>
        <div
          className="hover-bar"
          style={{
            position: "absolute",
            bottom: "-3px",
            left: "0",
            right: "0",
            width: "100%",
            height: "3px",
            backgroundColor: "#1890ff",
            opacity: "0",
            transition: "opacity 0.3s",
          }}
        ></div>
      </Button>

      <div style={{ flex: 1 }} />

      {userId ? (
        <div style={{ color: "#333333", display: "flex", alignItems: "center" }}>
          <Typography.Text
            style={{ color: "#333333", textTransform: "none" }}
          >
            {userId.email.split("@")[0]}
          </Typography.Text>
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
              <SettingOutlined style={{ color: "#333333" }} />
            </Button>
          </Dropdown>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
          <Button
            onClick={() => navigate("/register")}
            style={{
              display: "flex",
              gap: "0.5em",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              const bar = target.querySelector(".hover-bar");
              bar.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              const bar = target.querySelector(".hover-bar");
              bar.style.opacity = "0";
            }}
          >
            <SolutionOutlined
              style={{ color: "#1890ff", fontSize: "20px" }}
            />
            <Typography.Text
              style={{
                color: "#333333",
                fontFamily: "Rosemary",
                textTransform: "none",
              }}
            >
              Register
            </Typography.Text>
            <div
              className="hover-bar"
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "0",
                right: "0",
                width: "100%",
                height: "3px",
                backgroundColor: "#1890ff",
                opacity: "0",
                transition: "opacity 0.3s",
              }}
            ></div>
          </Button>

          <Button
            onClick={() => navigate("/login")}
            style={{
              display: "flex",
              gap: "0.5em",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              const bar = target.querySelector(".hover-bar");
              bar.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              const bar = target.querySelector(".hover-bar");
              bar.style.opacity = "0";
            }}
          >
            <UserOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
            <Typography.Text
              style={{
                color: "#333333",
                fontFamily: "Rosemary",
                textTransform: "none",
              }}
            >
              Login
            </Typography.Text>
            <div
              className="hover-bar"
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "0",
                right: "0",
                width: "100%",
                height: "3px",
                backgroundColor: "#1890ff",
                opacity: "0",
                transition: "opacity 0.3s",
              }}
            ></div>
          </Button>
        </div>
      )}

      
    </div>
  );
};

export default AppbarDesktop;
