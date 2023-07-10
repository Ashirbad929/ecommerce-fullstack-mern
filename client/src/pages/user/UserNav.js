import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const UserNav = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedKeys([currentPath]);
  }, [location]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Menu
        theme="light"
        mode="vertical"
        selectedKeys={selectedKeys}
        style={{ flexGrow: 1, border: "none" ,backgroundColor:"white" }}
      >
        <Menu.Item
          key="/user/history"
          icon={<DashboardOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/user/history">History</Link>
        </Menu.Item>
        <Menu.Item
          key="/user/wishlist"
          icon={<HeartOutlined style={{color:"red"}} />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/user/wishlist">Wishlist</Link>
        </Menu.Item>
        <Menu.Item
          key="/user/password"
          icon={<UserOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/user/password">Password</Link>
        </Menu.Item>
      </Menu>
      <div style={{ height: "20px" }}></div>
    </div>
  );
};

export default UserNav;
