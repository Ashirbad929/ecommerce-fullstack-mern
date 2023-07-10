import React from "react";
import UserNav from "./UserNav";

const Wishlist = () => {
  return (
    <div style={{ display: "flex" ,backgroundColor:"whitesmoke",height:"90vh"}}>
      <UserNav />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Wishlist</h1>
      </div>
    </div>
  );
};

export default Wishlist;
