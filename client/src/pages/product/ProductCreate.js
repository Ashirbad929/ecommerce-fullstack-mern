import React, { useEffect, useState } from "react";
import AdminNav from "../admin/AdminNav";
import { Button, Input, Select, message } from "antd";
import { createProduct } from "../../ApiFunctions/product";
import { selectuser } from "../../store/slices/usersSlice";
import { getCategories } from "../../ApiFunctions/category";
import { useSelector } from "react-redux";
import { getCategorySubs } from "../../ApiFunctions/category";
import FileUpload from "../../components/forms/FileUpload";

const { Option } = Select;

const ProductCreate = () => {
  const user = useSelector((state)=>state.user.userid); // Redux
  const [loading,setLoading]=useState(false)
  const loadCategories = () => {
    getCategories().then((c) => setValues({ ...values, categories: c.data }));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subs: [], // Array to store selected subcategories
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "ASUS", "Lenovo","Boat","Dell"],
    color: "",
    brand: "",
  };

  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.idtoken)
      .then((res) => {
        message.success("Product created", 10);
      })
      .catch((err) => {
        message.error(`Failed: ${err.response.data.error}`);
      });
  };

  const handleCategoryChange = (_id) => {
    setValues((prevState) => ({ ...prevState, category: _id, subs: [] })); //making subs  again =[] to deselect the multiselect options when user switches to different category
    getCategorySubs(_id)
      .then((res) => {
        setSubOptions(res.data);
        setShowSub(res.data.length > 0);
      })
      .catch((err) => {
        console.error("Error fetching subcategories:", err);
      });
  };

  const [values, setValues] = useState(initialState);
  const { title, description, price, quantity, colors, brands,images, categories, subs } =
    values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSelect = (name, value) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileUpload = (files) => {
    setValues((prevState) => ({ ...prevState, images: files }));
  };

  return (
    <div style={{ display: "flex", height: "90vh", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <AdminNav />
      </div>
      <div style={{ flex: 1, padding: "2rem" }}>
        {/* {JSON.stringify(values.images)} */}
        <h2 style={{ marginBottom: "2rem" }}>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              name="title"
              value={title}
              required
              onChange={handleChange}
              style={{ marginBottom: "1.5rem" }}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <Input.TextArea
              id="description"
              placeholder="Description"
              name="description"
              value={description}
              required
              onChange={handleChange}
              style={{ marginBottom: "1.5rem" }}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <Input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              value={price}
              onChange={handleChange}
              required
              style={{ marginBottom: "1.5rem" }}
            />
          </div>
          <div>
            <label htmlFor="shipping">Shipping:</label>
            <Select
              placeholder="Select shipping"
              id="shipping"
              name="shipping"
              style={{ marginBottom: "1.5rem", width: "100%" }}
              value={values.shipping}
              onChange={(value) => handleSelect("shipping", value)}
            >
              <Option value="No">No</Option>
              <Option value="Yes">Yes</Option>
            </Select>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <Input
              type="number"
              id="quantity"
              placeholder="Quantity"
              name="quantity"
              required
              value={quantity}
              onChange={handleChange}
              style={{ marginBottom: "1.5rem" }}
            />
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            <Select
              placeholder="Select color"
              id="color"
              name="color"
              style={{ marginBottom: "1.5rem", width: "100%" }}
              value={values.color}
              onChange={(value) => handleSelect("color", value)}
              dropdownStyle={{ color: "#000000" }}
            >
              {colors.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <Select
              placeholder="Select brand"
              id="brand"
              name="brand"
              style={{ marginBottom: "1.5rem", width: "100%" }}
              value={values.brand}
              onChange={(value) => handleSelect("brand", value)}
              dropdownStyle={{ color: "#000000" }}
            >
              {brands.map((b) => (
                <Option key={b} value={b}>
                  {b}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <Select
              style={{ marginBottom: "1.5rem", width: "100%" }}
              placeholder="Select category"
              id="category"
              value={values.category}
              onChange={(_id) => handleCategoryChange(_id)}
              dropdownStyle={{ color: "#000000" }}
            >
              {categories.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </div>
          {showSub && (
            <div>
              <label htmlFor="subcategory">Sub-category:</label>
              <Select
                style={{ marginBottom: "1.5rem", width: "100%" }}
                placeholder="Select sub-category"
                mode="multiple" // Add mode="multiple" to enable multi-select
                id="subcategory"
                value={values.subs} // Update from values.subcategory to values.subs
                onChange={(selectedSubs) =>
                  setValues({ ...values, subs: selectedSubs }) // Use spread operator to update the subs array
                }
                dropdownStyle={{ color: "#000000" }}
              >
                {subOptions.map((sub) => (
                  <Option key={sub._id} value={sub._id}>
                    {sub.name}
                  </Option>
                ))}
              </Select>
            </div>
          )}
          {/* image upload */}
          <div>
            <label htmlFor="images">Images:</label>
            <FileUpload setLoading={setLoading} onFileUpload={handleFileUpload} setValues={setValues} values={values} />
          </div>

          <div style={{ position: "sticky", bottom: 0, zIndex: 1 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Save
            </Button>
            {/* {subs} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
