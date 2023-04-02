import React from "react";

function HomeStepper({ link, alt,height,width }) {
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
        <img alt={alt} height={height} width={width} src={link} />
      </div>
    </div>
  );
}

export default HomeStepper;
