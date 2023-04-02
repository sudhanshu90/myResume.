import React from "react";
import HomeStepper from "../component_parts/HomeStepper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function HomepageInstructions() {
  const matches = useMediaQuery("(max-width:450px)");

  return (
    <div style={{ margin: "32px 0" }}>
      <Typography
        textAlign="center"
        variant={matches ? "h5" : "h4"}
        fontFamily="system-ui"
        sx={{
          margin: "0 4px",
          textShadow: "2px 2px 5px rgba(9, 105, 121, 1)",
        }}
      >
        Instructions
      </Typography>
      <Typography
        textAlign="center"
        variant={matches ? "subtitle1" : "h6"}
        fontFamily="system-ui"
        sx={{
          margin: "0 4px",
          fontWeight: "light",
          textShadow: "2px 2px 5px rgba(9, 105, 121, 1)",
        }}
      >
        Build Your Resume With Easy Steps.
      </Typography>
      <div
        style={{
          margin: "16px auto",
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          flexDirection: matches ? "column" : "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "32px",
          }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <HomeStepper
              alt="image not found"
              link="assets\image1.png"
              height={300}
              width={350}
            />
            <span
              style={{
                fontFamily: "sans-serif",
                margin: "16px 0",
                textShadow: "2px 2px 5px #000",
              }}
            >
              1. Pick Template
            </span>
          </motion.div>
        </div>
        <div
          style={{
            margin: matches ? "" : "68px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          {matches ? <ArrowDownwardIcon /> : <ArrowRightAltIcon />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "8px",
          }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <HomeStepper
              alt="image not found"
              link="assets\image2.png"
              height={330}
              width={330}
            />

            <span
              style={{
                fontFamily: "sans-serif",
                margin: "16px 0",
                textShadow: "2px 2px 5px #000",
              }}
            >
              2. Fill the Details
            </span>
          </motion.div>
        </div>
        <div
          style={{
            margin: matches ? "" : "68px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          {matches ? <ArrowDownwardIcon /> : <ArrowRightAltIcon />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "8px",
          }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            <HomeStepper
              alt="image not found"
              link="assets\image3.png"
              height={300}
              width={380}
            />

            <span
              style={{
                fontFamily: "sans-serif",
                margin: "16px 0",
                textShadow: "2px 2px 5px #000",
              }}
            >
              3. Get Hired
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomepageInstructions;
