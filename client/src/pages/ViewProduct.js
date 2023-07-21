import React, { useEffect, useState } from "react";
import { getProduct } from "../ApiFunctions/product";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/card/SingleProduct";
import { productStar } from "../ApiFunctions/product";
import "../css/viewproduct.css";
import { useSelector } from "react-redux";
import { selectuser } from "../store/slices/usersSlice";

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const user = useSelector(selectuser);
  const { slug } = useParams();
  const [star, setStar] = useState(0);

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  useEffect(() => {
    // Check if product.ratings exists before accessing it
    if(user){
      if (product.ratings && product.ratings.length   > 0) {
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
 
  }, [product,user]);
  

  const loadSingleProduct = () => getProduct(slug).then((res) => setProduct(res.data));

  const onStarclick = (newRating, name) => {
    setStar(newRating);
    console.log(newRating, name);

    productStar(name, newRating, user.idtoken).then((res) => {
      console.log("rating clicked", res.data);
    });
  };

  return (
    <>
      <div className="view-product">
        <SingleProduct product={product} onStarclick={onStarclick} star={star} />
      </div>
      related products
    </>
  );
};

export default ViewProduct;
