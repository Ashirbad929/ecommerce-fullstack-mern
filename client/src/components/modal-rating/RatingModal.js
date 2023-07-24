import React, { useState } from "react";
import { Modal } from "antd";
import { message } from "antd";

import { StarOutlined } from "@ant-design/icons";
import { selectuser } from "../../store/slices/usersSlice";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const RatingModal = ({ children }) => {
 const {slug}=useParams();

  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.userid);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    if (user && user.idtoken) {
      //if user is logged in
      setModalVisible(true); //then only user will see the modal
    } else {
      // we redirect to login page
   navigate('/login')
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined color="red" />
        {/* only logged in user can leave ratings  */}
        <br />
        {user ? "leave rating" : "login to leave rating"}
      </div>

      <Modal
        title="leave rating"
        centered
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        onOk={() => {
          setModalVisible(false);
          message.success("thanks for review");
        }}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
