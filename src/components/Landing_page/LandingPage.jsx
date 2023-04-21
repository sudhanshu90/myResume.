import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import themeColor from "../../theme";
import Button from "../../shared_component/Button";

function LandingPage() {
  const responsive = useMediaQuery("(min-width:800px)");
  return (
    <div
      style={{
        height:'500px',
        display: "flex",
        flexDirection: responsive ? "" : "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "48px",
      }}
    >
      <div style={{ marginBottom: "32px", width: responsive ? "500px" : '400px',textAlign: responsive ? '' : 'center' }}>
        <Typography
          variant={responsive ? "h2" : "h4"}
          fontFamily="sans-serif"
          sx={{
            letterSpacing: "3px",
            fontWeight: responsive ? "200" : '100',
            color: themeColor.light.slugText,
          }}
        >
          Craft Your Perfect Resume with
          <span style={{ color: themeColor.light.slugText, fontWeight:responsive?"600":'800' }}>
            {" "}
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
        <div style={{marginTop: responsive ? '12px' : '20px'}}>
        <Button title='Build My Resume' size="large"/>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", zIndex: -999 }}>
          <img
            src="assets\graph.png"
            alt="graph_logo"
            width={responsive ? 550 : 400}
            height={responsive ? 520 : 400}
          />
        </div>
        <img
          src="landing_Page_Images\third.png"
          alt="landing_page_image"
          width={responsive ? 400 : 300}
          height={responsive ? 400 : 300}
        />
      </div>
    </div>
  );
}

export default LandingPage;
