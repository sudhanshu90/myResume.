import React, { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import Loader from "../../shared_component/loader/Loader";

function Logout() {
  const { navigate } = useContext(AuthContext);
  useEffect(() => {
    localStorage.clear();
    navigate("/");
  });
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Loader />
      </div>
    </React.Fragment>
  );
}

export default Logout;
