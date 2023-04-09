import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "./Context/AuthContext";

function Logout() {
  const { navigate } = useContext(AuthContext);
  useEffect(() => {
    localStorage.clear();
    navigate("/");
  });
  return <div>Logging out...</div>;
}

export default Logout;
