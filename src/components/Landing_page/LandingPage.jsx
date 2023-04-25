import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import themeColor from "../../theme";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../../shared_component/Button";

function LandingPage() {
  const responsive = useMediaQuery("(min-width:800px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: responsive ? "row" : "column",
        justifyContent: "space-around",
        marginTop: !responsive ? "" : "64px",
      }}
    >
      <motion.div
        initial={responsive ? { x: -50 } : { y: -50 }}
        animate={responsive ? { x: 0 } : { y: 0 }}
        style={{
          margin: responsive ? "32px 0" : "32px auto",
          maxWidth: responsive ? "450px" : "500px",
          textAlign: responsive ? "" : "center",
        }}
      >
        <Typography
          variant={responsive ? "h2" : "h4"}
          fontFamily="sans-serif"
          sx={{
            letterSpacing: "2px",
            fontWeight: responsive ? "200" : "100",
            color: themeColor.light.slugText,
          }}
        >
          Craft Your Perfect Resume with
          <span
            style={{
              color: themeColor.light.slugText,
              fontWeight: responsive ? "600" : "700",
            }}
          >
            Resum
          </span>
          <span
            style={{
              backgroundColor: themeColor.light.primary,
              padding: "4px 4px",
              color: "white",
              borderRadius: "2px",
            }}
          >
            able
          </span>
        </Typography>
        <div style={{ marginTop: responsive ? "12px" : "20px" }}>
          <Button
            title="Build My Resume"
            size="large"
            endIcon={<ArrowForwardIcon />}
          />
        </div>
      </motion.div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", zIndex: -999 }}>
          <motion.div initial={{ x: 50 }} animate={{ x: 0 }}>
            <img
              src="assets\graph.png"
              alt="graph_logo"
              width={responsive ? 600 : 350}
              height={responsive ? 620 : 400}
            />
          </motion.div>
        </div>
        <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
          <img
            src="landing_Page_Images\third.png"
            alt="landing_page_image"
            width={responsive ? 450 : 300}
            height={responsive ? 450 : 300}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
