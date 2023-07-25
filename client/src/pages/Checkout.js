import React, { useEffect, useState } from "react";
import { getuserCart } from "../ApiFunctions/user";
import { useDispatch, useSelector } from "react-redux";
const Checkout = () => {
  const user = useSelector((state) => state.user.userid);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user) {
      getuserCart(user.idtoken)
        .then((res) => {
          console.log("user cart response", JSON.stringify(res.data, null, 4));
          setProducts(res.data.products);
          setTotal(res.data.cartTotal);
        })
        .catch((error) => {
          console.error("Error fetching user cart:", error.message);
          // Handle the error, e.g., show an error message to the user.
        });
    }
  }, [user]);

  console.log("Products:", products); // Log the products to the console to check if they are fetched correctly.

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery address</h4>
        
        <br />
        <br />
        textarea
        <button className="btn btn-primary mt-2">save</button>
        <hr />
        <h4>Got coupon?</h4>
        <br />
        coupon input apply button
      </div>
      <div className="col-md-6">
        <h4>order summary</h4>
        <h1>{total}</h1>
        {JSON.stringify(products)}
        <hr />
        <p>products x</p>
        <hr />
        <p>List of products</p>
        <p>cart total ₹xx</p>
        <div className="row">
            <div className="col-md-6">
                <button className="btn btn-primary">place order</button>
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary">Empty cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
