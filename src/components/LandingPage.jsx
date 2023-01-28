import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import HomepageInstructions from "./HomepageInstructions";
import DescriptionIcon from "@mui/icons-material/Description";
import StyledButton from "../component_parts/StyledButton";

function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "720px",
        color: "#ffff",
        background:
          "linear-gradient(to left bottom, #051937, #003859, #005b76, #007e8b, #36a298)",
      }}
    >
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            margin: "16px 0",
            textShadow: "2px 2px 5px #000",
            cursor: "pointer",
            fontSize: "36px",
          }}
        >
          myResume.
        </span>
        <div style={{ display: "flex" }}>
          <StyledButton
            title="Signup"
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffff",
              "&:hover": {
                color: "#ffff",
                backgroundColor: "#007e8b",
              },
            }}
            varient="text"
          />
          <StyledButton
            title="Login"
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#ffff",
              backgroundColor: "#007e8b",
              "&:hover": {
                color: "#ffff",
                backgroundColor: "#007e8b",
              },
            }}
            varient="text"
          />
        </div>
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              margin: "64px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Typography
                sx={{ textShadow: "2px 2px 5px rgba(9, 105, 121, 1)" }}
                variant="h2"
                fontFamily="sans-serif"
              >
                Resume Builder
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Typography
                variant="h6"
                fontFamily="system-ui"
                sx={{
                  margin: "0 4px",
                  textShadow: "2px 2px 5px rgba(9, 105, 121, 1)",
                }}
              >
                Create a professional Resume FREE! with &ldquo;
                <u>myResume.</u>
                &rdquo;
              </Typography>
              <Typography
                variant="subtitle1"
                fontFamily="system-ui"
                sx={{ textAlign: "center" }}
              >
                A Good Resume Puts the Employee at the Top of the List
              </Typography>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <StyledButton
              title="Create Your Resume"
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                backgroundColor: "#EF5350",
                "&:hover": {
                  backgroundColor: "#E57373",
                },
              }}
              varient="contained"
              startIcon={<DescriptionIcon sx={{ fontSize: "28px" }} />}
            />
            <StyledButton
              title="Choose template"
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "#ffff",
                "&:hover": {
                  color: "#ffff",
                  backgroundColor: "#007e8b",
                },
              }}
              varient="text"
            />
          </div>
        </motion.div>
        <HomepageInstructions />
      </Container>
    </div>
  );
}

export default LandingPage;
