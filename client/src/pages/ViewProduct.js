import React, { useEffect, useState } from "react";
import { getProduct } from "../ApiFunctions/product";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/card/SingleProduct";
import "../css/viewproduct.css"; // Import the shared CSS file for styling

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () => getProduct(slug).then((res) => setProduct(res.data));
  
  return (
    <div className="view-product">
      <SingleProduct product={product} />
      {/* {JSON.stringify(product)} */}
    </div>
  );
};

export default ViewProduct;
