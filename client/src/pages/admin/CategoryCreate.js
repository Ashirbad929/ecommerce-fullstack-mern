import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectuser } from "../../store/slices/usersSlice";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../ApiFunctions/category";
import AdminNav from "./AdminNav";
import { message } from "antd";
import { Button,Input } from "antd";
const CategoryCreate = () => {
  const user=useSelector(selectuser);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory({name},user.idtoken)
    .then(res=>{
        setLoading(false)
        setName('')
        message.success(`"${res.data.name}" is created`)
    })
    .catch(err=>{
        setLoading(false)
        message.error('failed to create')
    })
  };
  return (
    <div
      style={{ display: "flex", backgroundColor: "whitesmoke", height: "90vh" }}
    >
        <AdminNav></AdminNav>
     
      <div style={{ flex: 1, padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2em" }}>
          {loading ? <h2>creating...</h2> : <h2>Create category</h2>}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center",width:'50%' }}>
            <Input
              placeholder="name"
              
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "1em" }}
            />

            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading} disabled={!name}>
             create category
            </Button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default CategoryCreate;
