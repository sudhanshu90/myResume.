import { LoadingButton } from "@mui/lab";
import React from "react";
import themeColor from "../theme";
import { CircularProgress } from "@mui/material";

function Button({
  title = "title",
  loading,
  size = "small",
  width,
  height,
  variant = "outlined",
  fullWidth,
  onClick,
  endIcon,
  startIcon,
  style,
  noMargin,
  noHover,
  href,
}) {
  return (
    <a
      style={{
        textDecorationColor: "none",
        color: themeColor.light.primary,
      }}
      href={href}
    >
      <LoadingButton
        style={style}
        fullWidth={fullWidth}
        loading={loading}
        loadingIndicator={
          <CircularProgress
            size={20}
            sx={{ color: themeColor.light.disabled }}
          />
        }
        variant={variant}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        onClick={onClick}
        sx={{
          width: width,
          height: height,
          textTransform: "capitalize",
          borderColor: themeColor.light.primary,
          margin: noMargin ? "" : "0 4px",
          backgroundColor: variant ? "" : themeColor.light.primary,
          color: themeColor.light.primary,
          "&:hover": {
            backgroundColor: noHover ? "" : themeColor.light.primaryLight,
            color: noHover ? "" : themeColor.light.primary,
            borderColor: themeColor.light.primary,
          },
        }}
      >
        {title}
      </LoadingButton>
    </a>
  );
}

export default Button;
