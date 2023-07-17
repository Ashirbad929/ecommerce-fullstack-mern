import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { getProductsByCount } from "../../ApiFunctions/product";
import AdminDashCard from "../../components/card/AdminDashCard";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(13)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

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

      <div
        style={{
          padding: "2.5em",
          overflowY: "auto",
          width: "100%",
          flexGrow: 1, // Added flexGrow to expand the div and take remaining space
          maxHeight: "100vh", // Added maxHeight to limit the height of the child div
        }}
      >
        {loading ? (
          <h1>fetching...</h1>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "3em",
            }}
          >
            {products.map((product) => (
              <AdminDashCard product={product} loading={loading} key={product._id} /> // Added key prop
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
