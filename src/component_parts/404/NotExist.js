import React from "react";
import { motion } from "framer-motion";
import StyledButton from "../StyledButton";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";

function NotExist() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:450px)');

  return (
    <div
      style={{
        margin: "0 auto",
        width:'100%',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "72px",
        color: "#fefefe",
        background:
          "linear-gradient(to left bottom, #051937, #003859, #005b76, #007e8b, #36a298)",
      }}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <img alt="404" width={matches ? 350 : 600} height={matches ? 350 : 600} src="assets\404.png" />
        <StyledButton
          title="Go to Home"
          onClick={() => navigate("/")}
          style={{
            width:"95%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#EF5350",
            "&:hover": {
              backgroundColor: "#E57373",
            },
          }}
          varient="contained"
        />
      </motion.div>
    </div>
  );
}

export default NotExist;
