import React, { useState } from "react";
import UserNav from "./UserNav";
import { Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { auth } from "../../config-firebase/firebase";
import { updatePassword } from "firebase/auth";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if(password.length<6){
        message.error('password length is too small less than 6 charcters!')
        return;
    }
    setLoading(true);

    // Check if the user is logged in
    const currentUser = auth.currentUser;
    if (!currentUser) {
      message.error("User not logged in.");
      setLoading(false);
      return;
    }

    try {
      // Update password
      await updatePassword(currentUser, password);
      message.success("Password updated successfully!");
    } catch (error) {
      console.log("Error updating password:", error);
      message.error(`${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", backgroundColor: "whitesmoke", height: "90vh" }}>
      <UserNav />
      <div style={{ flex: 1, padding: "21px", }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2em" }}>
          {loading ? <h2>Updating...</h2> : <h2>Change Password</h2>}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width:"80%"}}>
            <Input.Password
              placeholder="New Password"
              prefix={<LockOutlined />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "1em" }}
            />

            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading} disabled={!password}>
              Update Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
