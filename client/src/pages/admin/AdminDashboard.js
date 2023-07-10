import React from "react";
import AdminNav from "./AdminNav";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" ,backgroundColor:"whitesmoke",height:"97vh"}}>
    <AdminNav />
    <div style={{ flex: 1, padding: "20px" }}>
      <h1>hello</h1>
    </div>
  </div>
  );
};

export default AdminDashboard;