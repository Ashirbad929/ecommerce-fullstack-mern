import React, { useEffect, useState } from "react";
import { getProducts } from "../../ApiFunctions/product";
import ProductCard from "../card/ProductCard";
import "../../css/home.css";
import Writer from "../Writer";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc", 5).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} loading={loading} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
