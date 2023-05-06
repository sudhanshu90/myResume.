import React, { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import { CircularProgress, Typography } from "@mui/material";
import themeColor from "../../theme";

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
          color: themeColor.light.secondary,
        }}
      >
        <Typography margin="12px 0" color={themeColor.light.primary}>
          Logging out...
        </Typography>
        <CircularProgress
          sx={{ color: themeColor.light.primary, fontSize: "26px" }}
        />
      </div>
    </React.Fragment>
  );
}

export default Logout;
