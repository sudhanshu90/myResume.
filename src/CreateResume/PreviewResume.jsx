import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function PreviewResume() {
  return (
    <Paper elevation={16} sx={{display:'flex',justifyContent:'space-between',borderRadius:'0',height:'500px' }}>
      <div style={{padding:'8px'}}>
      <Typography variant="h6" fontWeight='bold' className="mt-32">
       Sudhanshu Sharma
      (React Developer)
      </Typography>
      kkk
      <Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography><Typography variant="subtitle1">
       Sudhanshu Sharma
      </Typography>
      </div>
      <div style={{backgroundColor:'#868167',width:'35%'}}>
      <Typography variant="subtitle1">
       right
      </Typography>
      </div>
    </Paper>
  );
}

export default PreviewResume;
