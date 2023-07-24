import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../../store/slices/usersSlice";
import { json, useParams } from "react-router-dom";



import {
  
  getCategory,
  updateCategory,
  
  
} from "../../ApiFunctions/category";
import AdminNav from "./AdminNav";
import { message, Button, Input} from "antd";
import { useNavigate } from "react-router-dom";

const CategoryUpdate = () => {
  const user = useSelector((state)=>state.user.userid);
    const navigate=useNavigate();
    const {slug}=useParams();
useEffect(()=>{
  loadcategory();
},[])
 const loadcategory=()=>{
  getCategory(slug).then((c)=>{setName(c.data.category.name)})
 }
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
 
 
    
  useEffect(() => {
    
  }, []);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    updateCategory(slug,{name},user.idtoken)
  
    
      .then((res) => {
        setLoading(false)
        setName("")
        message.success("updated")
        navigate('/admin/category')
       
      })
      .catch((err) => {
        
        message.error(err.message)
        setLoading(false)
       
      });
  };

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
          {loading ? <h2>updating...</h2> : <h2>update Category</h2>}
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
              update
            </Button>
          </form>
          <hr style={{ width: "100%", borderTop: "1px solid black" }} />

          
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
