import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../../store/slices/usersSlice";
import { Typography, Button, Input, message, Select } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocalSearch from "../../../components/Search-engine/LocalSearch";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  createSub,
  getSub,
  removeSub,
  updateSub,
} from "../../../ApiFunctions/sub";
import AdminNav from "../AdminNav";
import { getCategories } from "../../../ApiFunctions/category";

const { Option } = Select;

const SubUpdate = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.userid);
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [parent, setParent] = useState("");

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
  };
  const loadSub = () => {
    getSub(slug).then((s) => {
      setName(s.data.name);
      setParent(s.data.parent);
    });
  };

  useEffect(() => {
    loadCategories();
    loadSub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    updateSub(slug, { name, parent }, user.idtoken)
      .then((res) => {
        setLoading(false);
        setName("");
        message.success(`updated`);
        navigate("/admin/sub");
      })
      .catch((err) => {
        setLoading(false);
        message.error("Failed to create");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
      }}
    >
      <AdminNav />

      <div style={{ flex: 2, padding: "10px", display: "flex", flexDirection: "column", marginBottom: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {loading ? <h2>Creating...</h2> : <h2>Update sub Category</h2>}

          <div style={{ marginTop: ".5em", width: "40%", marginBottom: "2em" }}>
            <Typography.Text strong>Category</Typography.Text>
            <Select
  style={{ width: "100%", backgroundColor: "#354A21" }}
  placeholder="Select parent category"
  value={parent}
  onChange={(value) => setParent(value)}
>
  {categories.map((c) => (
    <Option key={c._id} value={c._id}>
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
              update Sub Category
            </Button>
          </form>

          
         
        </div>
      </div>
    </div>
  );
};

export default SubUpdate;
