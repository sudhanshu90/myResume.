import React from "react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../../theme";

function StepsGuide() {
  const responsive = useMediaQuery("(min-width:800px)");

  return (
    <React.Fragment>
      <Divider orientation="horizontal" />
      <React.Fragment>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              borderRadius: "32px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Typography
              textAlign="center"
              letterSpacing="3px"
              variant={responsive ? "h5" : "h5"}
              fontFamily="sans-serif"
            >
              <span
                style={{ color: themeColor.light.primary, fontWeight: "bold" }}
              >
                Follow{" "}
              </span>
              these easy steps
            </Typography>

            <img
              alt="step1"
              src={
                !responsive
                  ? `assets/step_guide_responsive.png`
                  : "assets/step_guide.png"
              }
              width="100%"
              height={!responsive ? 600 : 350}
              style={{ borderRadius: "28px" }}
            />
          </div>
        </div>
      </React.Fragment>
      <Divider orientation="horizontal" />
    </React.Fragment>
  );
}

export default StepsGuide;
