import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  DollarOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  CodeSandboxOutlined,
  GiftOutlined,
} from "@ant-design/icons";

const AdminNav = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedKeys([currentPath]);
  }, [location]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      position:"",
      justifyContent: "space-between",
    }}>
      <Menu
        theme="dark"
        mode="vertical"
        selectedKeys={selectedKeys}
        style={{ flexGrow: 1, border: "none", backgroundColor: "rgb(20, 20, 20)" }}
      >
        <Menu.Item
          icon={
            <UserAddOutlined
              style={{ color: "red", fontSize: "30px", marginLeft: "1em" }}
            />
          }
          style={{ flexGrow: 1 }}
        ></Menu.Item>
        <Menu.Item
          key="/admin/dashboard"
          icon={<DashboardOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/product"
          icon={<GiftOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/product">product</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/products"
          icon={<CodeSandboxOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/products">products</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/category"
          icon={<AppstoreOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/category">category</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/sub"
          icon={<AppstoreOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/sub">Sub-category</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/coupon"
          icon={<DollarOutlined style={{ color: "green" }} />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/coupon">coupon</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/password"
          icon={<UserOutlined />}
          style={{ flexGrow: 1 }}
        >
          <Link to="/admin/password">password</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AdminNav;
