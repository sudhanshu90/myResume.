import React from "react";
import HomeStepper from "../component_parts/HomeStepper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

function HomepageInstructions() {
  return (
    <div>
      <div
        style={{
          margin: "68px auto",
          display: "flex",
          width: "80%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
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
            />
            <span
              style={{
                fontFamily: "sans-serif",
                margin: "16px 0",
                textShadow: "2px 2px 5px #000",
              }}
            >
              1. Select Template
            </span>
          </motion.div>
        </div>
        <div
          style={{
            margin: "68px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          <ArrowRightAltIcon />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
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
            />

            <span
              style={{
                fontFamily: "sans-serif",
                margin: "16px 0",
                textShadow: "2px 2px 5px #000",
              }}
            >
              2. Fill Your Details
            </span>
          </motion.div>
        </div>
        <div
          style={{
            margin: "68px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          <ArrowRightAltIcon />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
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
