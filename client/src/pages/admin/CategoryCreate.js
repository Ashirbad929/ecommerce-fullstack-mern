import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../store/slices/usersSlice";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined 
} from "@ant-design/icons";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../ApiFunctions/category";
import AdminNav from "./AdminNav";
import { message, Button, Input, List, Checkbox } from "antd";

const CategoryCreate = () => {
  const user = useSelector(selectuser);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  // 
  const [keyword,setKeyword]=useState('');

  const loadcategories = () =>
    getCategories().then((c) => setCategories(c.data));
  useEffect(() => {
    loadcategories();
  }, []);
  const handleRemove=async(slug)=>{
    if(window.confirm("confirm delete?")){
      setLoading(true)
      removeCategory(slug,user.idtoken)
      .then((res)=>{
        message.success(`${res.data.name} deleted `)
        loadcategories();
        setLoading(false)
      })
      .catch((err)=>{
       if(err.response.status===400){
        
        message.error(err.response.data)
       }
       setLoading(false)
      })
    }
    

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory({ name }, user.idtoken)
      .then((res) => {
        setLoading(false);
        setName("");
        message.success(`"${res.data.name}" is created`);
        loadcategories();
      })
      .catch((err) => {
        setLoading(false);
        message.error("failed to create");
      });
  };
  // step 3
  const handleSearchChange=(e)=>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }
  // step 4
  const searched=(keyword)=>(c)=>c.name.toLowerCase().includes(keyword)

  return (
    <div
      style={{ display: "flex", backgroundColor: "whitesmoke", height: "90vh" }}
    >
      <AdminNav />

      <div style={{ flex: 1, padding: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
          }}
        >
          {loading ? <h2>Creating...</h2> : <h2>Create Category</h2>}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "1em" }}
            />

            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={loading}
              disabled={!name}
            >
              Create Category
            </Button>
          </form>

          {/* search filter */}
          <Input
          style={{marginTop:"3.5em"}}
           type="search"
           placeholder="search catagory.."
           value={keyword}
           onChange={handleSearchChange}
          
           
           >

          </Input>
          <hr style={{ width: "100%", borderTop: "1px solid black" }} />
            {/* step 5 */}
          {categories.filter(searched(keyword)).map((c) => (
            <div
              key={c}
              style={{
                width: "80%",
                backgroundColor:"#354A21",
                marginBottom: "10px",
                paddingLeft: "10px",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "white",
                  marginLeft: "7px",
                  padding: "5px",
                }}
              >
                <Typography.Text style={{ color: "whitesmoke" }}>
                  {c.name}
                </Typography.Text>
                <div>
                  <Link to={`/admin/category/${c.slug}`}>
                    <span style={{ marginRight: "8px" }}>
                      <EditOutlined style={{color:"white"}}/>
                    </span>
                  </Link>
                  <span onClick={()=>handleRemove(c.slug)}>
                    <DeleteOutlined style={{color:"white"}} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
