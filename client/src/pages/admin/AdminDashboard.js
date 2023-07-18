import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";


const AdminDashboard = () => {
 

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "whitesmoke",
        maxHeight: "100vh",
        
      }}
    >
      <div style={{ position: "sticky" }}>
        <AdminNav />
      </div>
        <h1>Admin Dashboard</h1>
      
    </div>
  );
};

export default AdminDashboard;
