import { LoadingButton } from "@mui/lab";
import React from "react";
import themeColor from "../theme";
import { capitalize } from "lodash";

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
  style,
}) {
  return (
    <LoadingButton
      style={style}
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
        textTransform: "capitalize",
        margin: "0 4px",
        backgroundColor: themeColor.light.primary,
        color: themeColor.light.secondary,
        "&:hover": {
          backgroundColor: themeColor.light.info,
        },
      }}
    >
      {title}
    </LoadingButton>
  );
}

export default Button;
