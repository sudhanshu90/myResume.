import { Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import themeColor from "../../../theme";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../../../shared_component/Button";
import AuthContext from "../../../component_parts/auth/Context/AuthContext";

function LandingPageHeader() {
  const responsive = useMediaQuery("(min-width:800px)");
  const { signInModalOpen } = useContext(AuthContext);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "row" : "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: !responsive ? "20px 0 20px 0" : "36px 0 36px 0",
        }}
      >
        <motion.div
          initial={responsive ? { opacity: "0%" } : { opacity: "0%" }}
          animate={responsive ? { opacity: "100%" } : { opacity: "100%" }}
          style={{
            margin: responsive ? "32px 0" : "32px auto",
            textAlign: responsive ? "" : "center",
          }}
        >
          <Typography
            variant={responsive ? "h3" : "h4"}
            fontFamily="sans-serif"
            sx={{
              letterSpacing: "3px",
              fontWeight: responsive ? "200" : "100",
              color: themeColor.light.slugText,
            }}
          >
            Craft Your Perfect
            <br />
            Resume with&nbsp;
            <br />
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
              onClick={signInModalOpen}
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
          <div
            style={{
              position: "absolute",
              zIndex: -999,
              top: !responsive ? "" : "40px",
            }}
          >
            <motion.div initial={{ x: 50 }} animate={{ x: 0 }}>
              <img
                src="assets\graph.png"
                alt="graph_logo"
                width={responsive ? 700 : 350}
                height={responsive ? 700 : 400}
              />
            </motion.div>
          </div>

          <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
            <img
              src="landing_Page_Images\third.png"
              alt="landing_page_image"
              width={responsive ? 500 : 300}
              height={responsive ? 500 : 300}
            />
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPageHeader;
