import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
 import LoadingToredirect from "./LoadingToredirect";
const UserRoute = ({children}) => {
    const { user } = useSelector((state) => ({...state}));
    return user && user.token ? (
        children
    ) : (
     <LoadingToredirect/>
    );
};
 
export default UserRoute;