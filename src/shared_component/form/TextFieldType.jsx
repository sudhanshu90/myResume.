import { TextField } from "@mui/material";
import React from "react";

export const TextFieldType = ({
  title,
  placeholder,
  variant = "standarded",
}) => {
  return (
    <TextField
      id={title}
      label={title}
      variant={variant}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
    />
  );
};
