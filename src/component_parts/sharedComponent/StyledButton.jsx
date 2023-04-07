import { Button, CircularProgress } from "@mui/material";
import React from "react";

function StyledButton({
  title,
  style,
  startIcon,
  varient,
  onClick,
  disabled,
  loading,
  autoFocus,
  endIcon
}) {
  return loading ? (
    <Button
      disabled={loading}
      sx={{
        ...style,
        margin: "4px",
      }}
      startIcon={startIcon}
      variant={varient}
    >
      <CircularProgress size={20} color="inherit" />
    </Button>
  ) : (
    <Button
    autoFocus={autoFocus}
      onClick={onClick}
      disabled={disabled}
      sx={
        disabled
          ? {
            ...style,
              margin: "4px",
            }
          : {
              ...style,
              margin: "4px",
            }
      }
      startIcon={startIcon}
      endIcon={endIcon}
      variant={varient}
    >
      {title}
    </Button>
  );
}

export default StyledButton;
