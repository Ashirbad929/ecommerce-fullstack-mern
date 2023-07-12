import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../../store/slices/usersSlice";
import { Typography, Button, Input, message, Select } from "antd";
import { Link } from "react-router-dom";
import LocalSearch from "../../../components/Search-engine/LocalSearch";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { createSub, getSub, removeSub } from "../../../ApiFunctions/sub";
import AdminNav from "../AdminNav";
import { getCategories } from "../../../ApiFunctions/category";

const { Option } = Select;

const SubCreate = () => {
  const user = useSelector(selectuser);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category,setCategory]=useState("")

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleRemove = async (slug) => {
    if (window.confirm("Confirm delete?")) {
      setLoading(true);
      removeSub(slug, user.idtoken)
        .then((res) => {
          message.success(`${res.data.name} deleted`);
          loadCategories();
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            message.error(err.response.data);
          }
          setLoading(false);
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    createSub({ name ,parent:category}, user.idtoken)
      .then((res) => {
        setLoading(false);
        setName("");
        message.success(`"${res.data.name}" is sub created`);
      })
      .catch((err) => {
        setLoading(false);
        message.error("Failed to create");
        
      });
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "whitesmoke",
        height: "90vh",
      }}
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
          {loading ? <h2>Creating...</h2> : <h2>Create sub Category</h2>}
          

          <div style={{ marginTop: "2em", width: "50%",marginBottom:"4em" }}>
            <Typography.Text strong>Category</Typography.Text>
            <Select
              style={{ width: "100%", backgroundColor: "#354A21" }}
              placeholder="Select parent category"
              onChange={(e) =>setCategory(e)}
              
             
            >
              {categories.map((c) => (
                <Option key={c._id} value={c._id} >
                   
                  {c.name}
                </Option>
              ))}
            </Select>
          </div>
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
              Create Sub Category
            </Button>
          </form>
         
                
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

                
          <hr style={{ width: "100%", borderTop: "1px solid black" }} />

          {/* {categories.filter(searched(keyword)).map((c) => (
            <div
              key={c._id}
              style={{
                width: "80%",
                backgroundColor: "#F0F2F5",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#333",
                  marginLeft: "7px",
                  padding: "5px",
                }}
              >
                <Typography.Text strong>{c.name}</Typography.Text>
                <div>
                  <Link to={`/admin/category/${c.slug}`}>
                    <span style={{ marginRight: "8px" }}>
                      <EditOutlined style={{ color: "#1890ff" }} />
                    </span>
                  </Link>
                  <span onClick={() => handleRemove(c.slug)}>
                    <DeleteOutlined style={{ color: "#ff4d4f" }} />
                  </span>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SubCreate;
