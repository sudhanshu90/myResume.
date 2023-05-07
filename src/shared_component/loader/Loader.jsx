import React from "react";

function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img alt="loader_img" src="assets/loader.gif" height={50} width={50} />
      <span>Loading...</span>
    </div>
  );
}

export default Loader;
