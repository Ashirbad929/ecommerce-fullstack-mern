import React, { useState } from "react";
import AdminNav from "../admin/AdminNav";
import { Typography, Button, Input, Select, message } from "antd";

import { createProduct } from "../../ApiFunctions/product";
import { selectuser } from "../../store/slices/usersSlice";
import { useSelector } from "react-redux";
const ProductCreate = () => {
  const user=useSelector(selectuser)
  const { Option } = Select;
  const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    createProduct(values,user.idtoken)
    .then(res=>{
      message.success('product created')
    }).catch(err=>{
      message.error("falied:")
    })
    
    
  };

  const [values, setValues] = useState(initialState);
  const { title, description, price, quantity, colors, brands } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // console.log(e.target.name+"---"+e.target.value)
  };
  
  const handleSelect = (name, value) => { //special for antd select cause it does have e.taget.val we can directly pass it
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <AdminNav />
      <div style={{ flex: 2, marginTop: "0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "3em",
            height: "100%",
            overflowY: "none",
          }}
        >
          <h2>Create Product</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
            }}
          >
            {/* {JSON.stringify(values)}  for checking */} 
            <Input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              required
              onChange={handleChange}
              style={{ marginBottom: "1em" }}
            />
            <Input.TextArea
              placeholder="Description"
              name="description"
              value={description}
              required
              onChange={handleChange}
              style={{ marginBottom: "1em", height: "150px" }}
            />
            <Input
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={handleChange}
              required
              style={{ marginBottom: "1em" }}
            />
            <Select
              placeholder="Select shipping"
              name="shipping"
              style={{ marginBottom: "1em", width: "100%" }}
              value={values.shipping}
              
              onChange={(value) => handleSelect("shipping", value)}
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
            <Input
              type="number"
              placeholder="Quantity"
              name="quantity"
              required
              value={quantity}
              onChange={handleChange}
              style={{ marginBottom: "1em" }}
            />
            <Select
              placeholder="Select color"
              name="color"
              style={{ marginBottom: "1em", width: "100%" }}
              value={values.color}
              onChange={(value) => handleSelect("color", value)}
            >
              {colors.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Select brand"
              name="brand"
              style={{ marginBottom: "1em", width: "100%" }} 
              value={values.brand}
              onChange={(value) => handleSelect("brand", value)}
            >
              {brands.map((b) => (
                <Option key={b} value={b}>
                  {b}
                </Option>
              ))}
            </Select>

            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
