import { LoadingButton } from "@mui/lab";
import React from "react";
import themeColor from "../theme";

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
        margin:'0 4px',
        backgroundColor:themeColor.light.primary,
        color:themeColor.light.secondary,
        '&:hover':{
          backgroundColor:themeColor.light.info,
        }
      }}
    >
      {title}
    </LoadingButton>
  );
}

export default Button;
