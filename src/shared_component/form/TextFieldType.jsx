import { TextField } from "@mui/material";
import React from "react";
import themeColor from "../../theme";

export const TextFieldType = ({
  title,
  placeholder = "type here",
  variant = "outlined",
  onChange,
  value,
  id,
  type,
  required,
  message,
  textarea = false,
}) => {
  return (
    <TextField
      fullWidth
      id={id}
      label={title}
      type={type}
      placeholder={placeholder}
      variant={variant}
      onChange={(e) => onChange(e)}
      value={value}
      sx={{
        margin: "12px 0",
        "& .MuiOutlinedInput-root": {
          fieldset: {
            borderColor: themeColor.light.primary,
          },
          "&:hover fieldset": {
            borderColor: themeColor.light.primaryLight,
          },
          "&.Mui-focused fieldset": {
            borderColor: themeColor.light.primary,
          },
        },
      }}
      required={required}
      helperText={message}
      textarea={textarea.toString()}
      multiline={textarea}
      rows={textarea ? 4 : 1}
      InputLabelProps={{
        shrink: true,
        style: { color: themeColor.light.primary },
      }}
    />
  );
};
