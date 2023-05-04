import React from "react";
import themeColor from "../../theme";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <React.Fragment>
      <Link
        to="/"
        style={{
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "sans-serif",
          cursor: "pointer",
          textDecoration: "none",
          letterSpacing: "0.2rem",
          color: themeColor.light.primary,
          display: "flex",
          margin: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{ color: themeColor.light.primaryText, fontWeight: "300" }}
          >
            Resum
          </span>
          <span
            style={{
              backgroundColor: themeColor.light.primary,
              padding: "4px 4px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            able
          </span>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
