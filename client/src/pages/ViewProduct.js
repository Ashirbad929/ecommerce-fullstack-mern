import React, { useEffect, useState } from "react";
import { getProduct, productStar, getRelated } from "../ApiFunctions/product";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/card/SingleProduct";
import "../css/viewproduct.css";
import { useSelector } from "react-redux";
import ProductCard from "../components/card/ProductCard";
import { selectuser } from "../store/slices/usersSlice";

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const user = useSelector((state)=>state.user.userid);
  const { slug } = useParams();
  const [loading,setloading]=useState(false)
  const [star, setStar] = useState(0);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  useEffect(() => {
    // Check if product.ratings exists before accessing it
    if (user) {
      if (product.ratings && product.ratings.length > 0) {
        let existingRatingObject = product.ratings.find((ele) => {
          console.log("ele:", ele); // Log the element ...
          return ele.postedBy.toString() === user._id.toString(); // Check if postedBy matches user._id
        });
        console.log("existingRatingObject:", existingRatingObject);

        if (existingRatingObject) {
          // If rating exists for the current user, set the star value
          setStar(existingRatingObject.star);
        } else {
          // If no rating found for the current user, set the star value to 0 (or any default value)
          setStar(0);
        }
      }
    }
  }, [product, user]);

  const loadSingleProduct = () => {
    setloading(true)
    getProduct(slug).then((res) => {
      setProduct(res.data);
      setloading(false)

      getRelated(res.data._id).then((related) => {
        setRelated(related.data);
      });
    });
  };

  const onStarclick = (newRating, name) => {
    setStar(newRating);
    console.log(newRating, name);

    productStar(name, newRating, user.idtoken).then((res) => {
      console.log("rating clicked", res.data);
    });
  };

  return (
    <div className="view-product-container">
      <div className="view-product">
        <SingleProduct product={product} onStarclick={onStarclick} star={star} />
      </div>
      <hr />
      <div className="related-products">
        <h2>Related Products</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "1rem" ,marginLeft:"2rem" }}>
          {related.length > 0 ? (
            related.map((r) => (
              <div key={r._id} style={{ display:"grid" ,}}>
                <ProductCard loading={loading} product={r} />
              </div>
            ))
          ) : (
            "No items to show"
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
