import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import LockIcon from "@mui/icons-material/Lock";
import EastIcon from "@mui/icons-material/East";
import useMediaQuery from "@mui/material/useMediaQuery";
import StyledButton from "../component_parts/sharedComponent/StyledButton";

function HomePageHeader({ chooseTemplates, ResumePage }) {
  const matches = useMediaQuery("(max-width:450px)");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: matches ? "250px" : "230px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <Typography
              sx={{ textShadow: "2px 2px 5px rgba(9, 105, 121, 1)" }}
              variant={matches ? "h3" : "h2"}
              fontFamily="sans-serif"
            >
              Resume Builder
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            <Typography
              variant={matches ? "subtitle" : "h6"}
              fontFamily="system-ui"
              sx={{
                margin: "0 4px",
                textShadow: "2px 2px 5px rgba(9, 105, 121, 1)",
              }}
            >
              Build a professional Resume 100% FREE! with &ldquo;
              <u>myResume.</u>
              &rdquo;
            </Typography>
            <Typography
              variant={matches ? "caption" : "subtitle1"}
              fontFamily="system-ui"
              sx={{ textAlign: "center" }}
            >
              {matches ? <br /> : ""}A Good Resume Puts the Employee at the Top
              of the List
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
            title="Get Started Now"
            onClick={() => ResumePage()}
            style={{
              width: matches ? "100%" : "40%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#EF5350",
              "&:hover": {
                backgroundColor: "#E57373",
              },
            }}
            varient="contained"
            endIcon={<EastIcon sx={{ fontSize: "28px" }} />}
          />

          <StyledButton
            title="Choose templates"
            onClick={() => chooseTemplates()}
            style={{
              width: matches ? "100%" : "30%",
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
            disabled
            endIcon={<LockIcon />}
          />
        </div>
      </motion.div>
    </>
  );
}

export default HomePageHeader;
