import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate } from "react-router";

function ProtectRoute({ children }) {
  const { userLoggedIn } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("data"));
  if (userData) return <div>{children}</div>;
  else {
    return <Navigate to="/" />;
  }
}

export default ProtectRoute;
