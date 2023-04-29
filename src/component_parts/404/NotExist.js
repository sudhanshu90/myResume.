import { useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Button from "../../shared_component/Button";
import ArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AuthContext from "../auth/Context/AuthContext";

function NotExist() {
  const responsive = useMediaQuery("(min-width:800px)");
  const { goToHome } = useContext(AuthContext);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: !responsive ? "100%" : "35%",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <img alt="404" src="assets\noRounte.gif" height="auto" width="100%" />
        <div>
          <Button
            title="Go to Home"
            startIcon={<ArrowLeftIcon />}
            height="40px"
            width="150px"
            style={{ margin: "12px 0" }}
            onClick={() => goToHome()}
          />
        </div>
      </div>
    </div>
  );
}

export default NotExist;
