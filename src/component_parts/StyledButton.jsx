import { Button } from "@mui/material";
import React from "react";

function StyledButton({ title, style, startIcon,varient }) {
  return (
      <Button
        sx={{
          ...style,
          margin:'4px',
          
        }}
        startIcon={startIcon}
        variant={varient}
      >
        {title}
      </Button>
  );
}

export default StyledButton;
