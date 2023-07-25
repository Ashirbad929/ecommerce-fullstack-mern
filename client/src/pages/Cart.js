import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCardIncheckout from "../components/card/ProductCardIncheckout";
import { userCart } from "../ApiFunctions/user";
const Cart = () => {
    const navigate=useNavigate()
  const user = useSelector((state) => state.user.userid);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    return cart.reduce((curr, next) => {
      return curr + next.count * next.price;
    }, 0);
  };
  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Color</th>
            <th scope="col">Count</th>
            <th scope="col">shipping</th>
            <th scope="col">remove</th>
            
        </tr>

      </thead>
      {cart.map((p)=>(
        <ProductCardIncheckout key={p._id} p={p}/>
      ))}
    </table>
  );
  const saveOrdertoDb = () => {
    userCart(cart,user.idtoken).then((res)=>{
        console.log('caart post res',res)
        if(res.data.ok){
            navigate('/checkout')
        }
    }).catch(err=>console.log('cart save error',err))

    navigate('/checkout')
  };
  return (
    <div className="container-fluid pt-2">
      
      <div className="row">
        <div className="col-md-8">
        <h4> cart / {cart.length} product</h4>
          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">continue shopping</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order summary</h4>
          <hr />
          <p>products</p>
          {cart.map((c,i)=>(
            <div key={i}>
                <p>{c.title} x {c.count}=₹{c.price*c.count}</p>
            </div>
          ))}
          <hr />
          Total: <b>₹{getTotal()}</b>
          <hr />
          {
            user?(
                <button disabled={!cart.length} onClick={saveOrdertoDb} className="btn btn-sm btn-primary mt-2">proceed to checkout</button>
            ):(
                <button className="btn btn-sm btn-primary mt-2">login to checkout</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
