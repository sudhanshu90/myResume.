import React from "react";

export const VideoCard = ({ url = "assets/intro.mp4", width = "100%" }) => {
  return (
    <React.Fragment>
      <video
        width="100%"
        height="60%"
        poster="assets/intro_poster.png"
        controls
      >
        <source src={url} type="video/mp4" />
      </video>
    </React.Fragment>
  );
};
