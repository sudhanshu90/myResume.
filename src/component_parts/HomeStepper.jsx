import { Divider, Paper } from "@mui/material";
import React from "react";

function HomeStepper({ link, alt }) {
  return (
    <div>
      <div
        sx={{
          height: "200px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          color: "#ffff",
        }}
      >
        <img alt={alt} height={160} width={200} src={link} />
      </div>
    </div>
  );
}

export default HomeStepper;
