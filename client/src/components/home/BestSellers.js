import React, { useEffect, useState } from "react";
import { getProducts,getProductsCount } from "../../ApiFunctions/product";
import ProductCard from "../card/ProductCard";
import "../../css/home.css";
import Writer from "../Writer";
import { Pagination } from "antd";
const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount,setProductsCount]=useState(0)
  const [page,setPage]=useState(1);
  const loadAllProducts = () => {
    setLoading(true);
    getProducts("sold", "desc",page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProducts(); //when page changes we fetch next pages items so it has dependency array of page
  }, [page]);
  useEffect(()=>{
    getProductsCount().then((res)=>setProductsCount(res.data))
},[])

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} loading={loading} product={product} />
        ))}
      </div>
      <Pagination className="pagination-bar" defaultCurrent={page} total={(Math.ceil(productsCount/3))*10} onChange={(page)=>setPage(page)} />
    </div>
  );
};

export default BestSellers;
