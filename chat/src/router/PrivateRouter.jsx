import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRouter = () => {

    const {isAuthenticated} = useContext(AuthContext);
  return (
    isAuthenticated ? <Outlet/> : <Navigate to="/login" />
  )
}
