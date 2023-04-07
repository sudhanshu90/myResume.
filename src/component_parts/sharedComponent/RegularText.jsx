import React from "react";
import TextField from "@mui/material/TextField";

function RegularText({ name, placeholder, type, required = false }) {
  switch (type) {
    case "textArea":
      return (
        <div style={{ width: "100%" }}>
          <TextField
            fullWidth
            id={name}
            required={required}
            multiline
            rows={3}
            label={name}
            placeholder={placeholder || name}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ background: "rgb(239, 242, 249)", minWidth: "242px" }}
          />
        </div>
      );
    case "number":
      return (
        <div style={{ width: "100%" }}>
          <TextField
            fullWidth
            id={name}
            type="number"
            required={required}
            label={name}
            placeholder={placeholder || name}
            variant="filled"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ background: "rgb(239, 242, 249)" }}
          />
        </div>
      );
    case "email":
      return (
        <div style={{ width: "100%" }}>
          <TextField
            fullWidth
            id={name}
            required={required}
            type="email"
            label={name}
            placeholder={placeholder || name}
            variant="filled"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ background: "rgb(239, 242, 249)" }}
          />
        </div>
      );

    default:
      return (
        <div style={{ width: "100%" }}>
          <TextField
            fullWidth
            id={name}
            required={required}
            label={name}
            placeholder={placeholder || name}
            variant="filled"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ background: "rgb(239, 242, 249)" }}
          />
        </div>
      );
  }
}

export default RegularText;
