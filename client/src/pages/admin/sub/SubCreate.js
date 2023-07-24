import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../../store/slices/usersSlice";
import { Typography, Button, Input, message, Select } from "antd";
import { Link } from "react-router-dom";
import LocalSearch from "../../../components/Search-engine/LocalSearch";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { createSub, getSub, removeSub, getSubs } from "../../../ApiFunctions/sub";
import AdminNav from "../AdminNav";
import { getCategories } from "../../../ApiFunctions/category";

const { Option } = Select;

const SubCreate = () => {
  const user = useSelector((state)=>state.user.userid);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [subs, setSubs] = useState([]);

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
  };

  const loadSubs = () => {
    getSubs().then((s) => setSubs(s.data));
  };

  useEffect(() => {
    loadCategories();
    loadSubs();
  }, []);

  const handleRemove = async (slug) => {
    if (window.confirm("Confirm delete?")) {
      setLoading(true);
      removeSub(slug, user.idtoken)
        .then((res) => {
          message.success(`${res.data.name} deleted`);
          setLoading(false);
          loadSubs();
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
    createSub({ name, parent: category }, user.idtoken)
      .then((res) => {
        setLoading(false);
        setName("");
        message.success(`"${res.data.name}" sub-category created`);
        loadSubs();
      })
      .catch((err) => {
        setLoading(false);
        message.error("Failed to create sub-category");
      });
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <AdminNav />

      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            height: "100%",
          }}
        >
          {loading ? (
            <h2>Creating...</h2>
          ) : (
            <h2 style={{ marginBottom: "1em" }}>Create Sub Category</h2>
          )}

          <div
            style={{
              marginTop: "0.5em",
              width: "40%",
              marginBottom: "2em",
            }}
          >
            <Typography.Text strong>Category</Typography.Text>
            <Select
              style={{ width: "100%", backgroundColor: "#354A21" }}
              placeholder="Select parent category"
              onChange={(value) => setCategory(value)}
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
              Create Sub Category
            </Button>
          </form>

          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          <hr style={{ width: "100%", borderTop: "1px solid black" }} />

          <div
            style={{
              width: "100%",
              backgroundColor: "#F0F2F5",
              padding: "10px",
              marginTop: "1em",
            }}
          >
            {subs.filter(searched(keyword)).map((s) => (
              <div
                key={s._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#333",
                  padding: "5px",
                }}
              >
                <Typography.Text strong>{s.name}</Typography.Text>
                <div>
                  <Link to={`/admin/sub/${s.slug}`}>
                    <span style={{ marginRight: "8px" }}>
                      <EditOutlined style={{ color: "#1890ff" }} />
                    </span>
                  </Link>
                  <span onClick={() => handleRemove(s.slug)}>
                    <DeleteOutlined style={{ color: "#ff4d4f" }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCreate;
