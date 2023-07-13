import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../store/slices/usersSlice";
import { createProduct } from "../../ApiFunctions/product";
import AdminNav from "../admin/AdminNav";
const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "white", "Blue"],
  brands: ["Apple", "Samsung", "Microsoft", "ASUS", "Lenovo"],
  color: "",
  brand: "",
};
const ProductCreate = () => {
  const [values, setValues] = useState(initialState);

  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
      }}
    >
      <AdminNav />
      productcreate
    </div>
  );
};

export default ProductCreate;
