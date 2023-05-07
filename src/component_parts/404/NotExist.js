import { Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AuthContext from "../auth/Context/AuthContext";
import Button from "../../shared_component/Button";
import themeColor from "../../theme";

function NotExist() {
  const responsive = useMediaQuery("(min-width:800px)");
  const { goToHome } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div style={{ paddingTop: "64px" }}>
          <img
            alt="404"
            src="assets/mr_builder/404.png"
            height="300"
            width="250"
          />
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              fontWeight="bold"
              color={themeColor.light.primary}
            >
              404
            </Typography>
            <Button
              title="Go to Home"
              startIcon={<ArrowLeftIcon />}
              size="large"
              height="40px"
              width="250px"
              style={{ marginLeft: "16px" }}
              onClick={() => goToHome()}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotExist;
