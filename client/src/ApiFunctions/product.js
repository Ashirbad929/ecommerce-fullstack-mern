import axios from "axios";
export const createProduct = async (product, authtoken) => {
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      authtoken,
    },
  });
};
export const getProductsByCount = async (count) => {
  return await axios.get(`${process.env.REACT_APP_API}/products/${count}`, {
    headers: {},
  });
};
export const removeProduct = async (slug, authtoken) => {
  return await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`, {
    headers: {
      authtoken,
    },
  });
};
export const getProduct = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);
};
export const updateProduct = async (slug, product, authtoken) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/product/${slug}`,
    product,
    {
      headers: {
        authtoken,
      },
    }
  );
};
// for home pagination
export const getProducts = async (sort, order, page) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/products`,
    { sort, order, page },
    
  );
};
export const getProductsCount = async () => {
  return await axios.post(
    `${process.env.REACT_APP_API}/products/total`,
   
    
  );
};
