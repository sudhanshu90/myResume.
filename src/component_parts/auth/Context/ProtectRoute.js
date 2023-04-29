import React from "react";
import { Navigate } from "react-router";

function ProtectRoute({ children }) {
  const userData = JSON.parse(localStorage.getItem("data"));
  if (userData) return <div>{children}</div>;
  else {
    return <Navigate to="/signin" />;
  }
}

export default ProtectRoute;
