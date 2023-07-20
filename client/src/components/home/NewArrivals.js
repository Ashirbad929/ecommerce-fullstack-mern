import React, { useEffect, useState } from "react";
import { getProducts,getProductsCount } from "../../ApiFunctions/product";
import ProductCard from "../card/ProductCard";
import { Pagination } from "antd";
import "../../css/home.css";
import Writer from "../Writer";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount,setProductsCount]=useState(0)
  const [page,setPage]=useState(1);
 
  useEffect(() => {
    loadAllProducts();
  }, [page]);
  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc",page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };
  
 
  useEffect(()=>{
      getProductsCount().then((res)=>setProductsCount(res.data))
  },[])

  return (
    <div className="home-container">
      <div className="product-list">
        {/* {productsCount} */}
        {products.map((product) => (
          <ProductCard key={product._id} loading={loading} product={product} />
        ))}
      </div>
      <Pagination className="pagination-bar"  defaultCurrent={page} total={(Math.ceil(productsCount/3))*10} onChange={(page)=>setPage(page)} />
      
    </div>
  );
};

export default NewArrivals;
