import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../store/slices/usersSlice";
import { Typography, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
import LocalSearch from "../../components/Search-engine/LocalSearch";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { createCategory, getCategories, removeCategory } from "../../ApiFunctions/category";
import AdminNav from "./AdminNav";

const CategoryCreate = () => {
  const user = useSelector((state)=>state.user.userid);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
  };

  const handleRemove = async (slug) => {
    if (window.confirm("Confirm delete?")) {
      setLoading(true);
      try {
        const res = await removeCategory(slug, user.idtoken);
        message.success(`${res.data.name} deleted`);
        loadCategories();
      } catch (err) {
        message.error(err.response.data);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createCategory({ name }, user.idtoken);
      message.success(`"${res.data.name}" is created`);
      setName("");
      loadCategories();
    } catch (err) {
      message.error("Failed to create");
    } finally {
      setLoading(false);
    }
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <AdminNav />
      <div style={{ flex: 2 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3em",
            height: "100%",
            overflowY: "none",
          }}
        >
          <h2>{loading ? "Creating..." : "Create Category"}</h2>
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
          <LocalSearch
            keyword={keyword}
            setKeyword={setKeyword}
            style={{ marginTop: "2em", width: "50%" }}
          />
          <div
            style={{
              width: "100%",
              height: "100% ",
              overflowY: "auto",
              padding: "1em",
              border: "none",
              marginTop: "2em",
            }}
          >
            {categories.filter(searched(keyword)).map((c) => (
              <div
                key={c._id}
                style={{
                  width: "100%",
                  backgroundColor: "#F0F2F5",
                  marginBottom: "30px",
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
                  <Typography.Text
                    style={{ color: "#333", fontWeight: "bold" }}
                  >
                    {c.name}
                  </Typography.Text>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
