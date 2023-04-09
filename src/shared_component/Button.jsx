import { LoadingButton } from "@mui/lab";
import React from "react";

function Button({
  title = "title",
  loading,
  size = "small",
  width,
  height,
  variant = "contained",
  fullWidth,
  onClick,
  endIcon,
  startIcon,
}) {
  return (
    <LoadingButton
      fullWidth={fullWidth}
      loading={loading}
      loadingIndicator="Loading…"
      variant={variant}
      size={size}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        margin:'0 4px'
      }}
    >
      {title}
    </LoadingButton>
  );
}

export default Button;
