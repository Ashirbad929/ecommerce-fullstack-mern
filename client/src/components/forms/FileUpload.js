import React, { useState } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Resizer from "react-image-file-resizer";
import axios, { all } from "axios";
import { selectuser } from "../../store/slices/usersSlice";
import { useSelector } from "react-redux";
import { Avatar } from 'antd';
const { Dragger } = Upload;

const FileUpload = ({ onFileUpload, setLoading, setValues, values }) => {
  const user = useSelector(selectuser);
  const allimages=[]
  const fileUploadAndResize = ({ fileList }) => {
    const files = fileList.map((file) => file.originFileObj);
    onFileUpload(files);
   
    if (files) {
      setLoading(true);
      const resizedImages = [];

      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            resizedImages.push(uri);

            // Check if all images have been resized
            if (resizedImages.length === files.length) {
              setLoading(false);
              onFileUpload(resizedImages);
              resizedImages.forEach((image) => {
                axios
                  .post(
                    `${process.env.REACT_APP_API}/uploadimages`,
                    { image },
                    {
                      headers: {
                        authtoken: user ? user.idtoken : "",
                      },
                    }
                  )
                  .then((res) => {
                    console.log("image upload response data", res);
                    allimages.push(res.data)
                    console.log('allimsges...',allimages)
                    setValues({ ...values, images: allimages });//storing in a nested array
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            }
          }
        );
      }
    }
  };

  return (
    <div>
      <Dragger multiple accept="images/*" onChange={fileUploadAndResize} >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
     
       
      
       
      
    

     
    </div>
  );
};

export default FileUpload;
