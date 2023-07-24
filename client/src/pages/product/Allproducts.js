import React, { useEffect, useState } from "react";
import AdminNav from "../admin/AdminNav";
import { getProductsByCount } from "../../ApiFunctions/product";
import AdminProductCard from "../../components/card/AdminProductCard";
import { removeProduct } from "../../ApiFunctions/product";
import { useSelector } from "react-redux";
import { selectuser } from "../../store/slices/usersSlice";
import { message } from "antd";
const AllProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user=useSelector((state)=>state.user.userid)
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
const handleRemove=async(slugg)=>{
    // let answer=window.confirm('delete')
   
    if(window.confirm('delete')){
        removeProduct(slugg,user.idtoken).then((res)=>{
            message.success('deleted')
            message.success(`${res.data.title} deleted`)
            loadAllProducts();

        }).catch((err)=>{
            message.error('falied')

        })
        
    }
}
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
              <AdminProductCard product={product} loading={loading} key={product._id} handleRemove={handleRemove} /> // Added key prop
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
