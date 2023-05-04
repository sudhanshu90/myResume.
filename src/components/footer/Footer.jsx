import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import themeColor from "../../theme";

function Footer() {
  return (
    <div
      style={{
        height: "60px",
        boxShadow: "2px 2px 5px gray",
        color: themeColor.light.secondaryText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontFamily: "sans-serif",
        }}
      >
        <CopyrightIcon fontSize="14px" /> 2023 Resumable | All rights reserved
      </div>
    </div>
  );
}

export default Footer;
