import React from "react";
import TextField from "@mui/material/TextField";

function RegularText({name,placeholder}) {
  return (
    <div style={{width:'100%'}}>
      <TextField
        fullWidth
        id={name}
        label={name}
        placeholder={placeholder || name}
        variant="standard"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default RegularText;
