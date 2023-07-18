import React, { useEffect, useState } from "react";
import AdminNav from "../admin/AdminNav";
import { Button, Input, Select, message } from "antd";
import { createProduct } from "../../ApiFunctions/product";
import { selectuser } from "../../store/slices/usersSlice";
import { getCategories } from "../../ApiFunctions/category";
import { useSelector } from "react-redux";
import { getCategorySubs } from "../../ApiFunctions/category";
import FileUpload from "../../components/forms/FileUpload";
import { getProduct } from "../../ApiFunctions/product";
import { updateProduct } from "../../ApiFunctions/product";
import { useParams } from "react-router-dom";
const { Option } = Select;

const ProductUpdate = () => {
  const { slug } = useParams();
  const user = useSelector(selectuser); // Redux
  const [loading, setLoading] = useState(false);
  const loadCategories = () => {
    getCategories().then((c) => setValues({ ...values, categories: c.data }));
  };
  const [arrayofSubs,setarrayofSubs]=useState([]) //to prepolulate subs with previous subs 

  const loadProduct = () => {
    getProduct(slug)
      .then((p) => {
        setValues((Values) => ({ ...Values, ...p.data }));
        let arr=[]
        p.data.subs.map((s)=>{
          arr.push(s.name) //we just need name there
        })
        setarrayofSubs(arr)
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loadCategories();
    loadProduct();
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
    brands: ["Apple", "Samsung", "Microsoft", "ASUS", "Lenovo"],
    color: "",
    brand: "",
  };

  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);




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
  const { title, description, price,category, quantity, colors, brands, images, categories, subs } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    updateProduct(slug,values ,user.idtoken)
      .then((res) => {
        message.success("Product updated");
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        message.error(`Failed ${err.response.data.err}`);
        
      });
  };
  
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
  console.log('subs',subs)
  
  return (
    <div style={{ display: "flex", height: "90vh", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <AdminNav />
      </div>
      {JSON.stringify(values.shipping)}
      <div style={{ flex: 1, padding: "2rem" }}>
        {loading ?(<h2 style={{ marginBottom: "2rem" }}>loading...</h2>):(<h2 style={{ marginBottom: "2rem" }}>Product Update</h2>) }
        
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
              value={values.category.name}
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
                defaultValue={arrayofSubs}
                 // Update from values.subcategory to values.subs
                 value={subs}
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
              update & save
            </Button>
            {/* {subs} */}
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
