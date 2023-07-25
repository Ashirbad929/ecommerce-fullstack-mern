import axios from "axios";
export const userCart = async (cart, authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const getuserCart = async ( authtoken) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/user/cart`,

    {
      headers: {
        authtoken,
      },
    }
  );
};
export const getWishlist = async (authtoken) => {
  return await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: {
      authtoken,
    },
  });
};

export const removeWishlist=async(authtoken,productId)=>{
  return await axios.put(`${process.env.REACT_APP_API}/user/wishlist/${productId}`,{},{
    headers:{
      authtoken
    }
  })
}
export const addtoWishlist=async(authtoken,productId)=>{
  return await axios.post(`${process.env.REACT_APP_API}/user/wishlist`,{productId},{
    headers:{
      authtoken
    }
  })
}