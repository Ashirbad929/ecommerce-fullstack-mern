import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getWishlist, removeWishlist } from "../../ApiFunctions/user";
import { DeleteOutlined } from '@ant-design/icons';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const user = useSelector((state) => state.user.userid);

  useEffect(() => {
    if (user) {
      loadWishlist();
    }
  }, [user]);

  const loadWishlist = () => {
    if (user && user.idtoken) {
      getWishlist(user.idtoken).then((res) => {
        console.log(res);
        setWishlist(res.data.wishlist);
      });
    }
  };

  const handleRemove = (productId) => {
    removeWishlist(user.idtoken, productId).then((res) => {
      loadWishlist();
    });
  };

  console.log("oyeeeee", user.idtoken);

  return (
    <div style={{ display: "flex", backgroundColor: "whitesmoke", height: "90vh" }}>
      <UserNav />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Wishlist</h1>
        {wishlist.map((p) => (
          <div key={p._id} className="alert alert-secondary" style={{ position: 'relative' }}>
            <Link to={`/product/${p.slug}`}>{p.title}</Link>
            <span
              onClick={() => handleRemove(p._id)}
              className="btn btn-sm"
              style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}
            >
              <DeleteOutlined className="text-danger"  style={{ fontSize: '24px' }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
