import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { startCase } from "lodash";
import { useMediaQuery } from "@mui/material";

function DetailsForm({ data, title }) {
  const matches = useMediaQuery("(max-width:450px)");
  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          padding: "18px",
          overflowY: !matches ? "scroll" :'none',
          height: !matches ? "465px" : 'auto',
        }}
      >
        <Typography
          sx={{ padding: "8px 0" }}
          variant="h6"
          textAlign="center" 
          color="#36a298"
        >
          {startCase(title)}
        </Typography>
        <div
          style={{
            border: "1px solid #36a298",
            borderRadius: "5px",
            padding: "16px",
            minHeight: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            spacing={2}
            color="white"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data?.map((val, index) => {
              const { Component } = val;
              return (
                <Grid xl={val?.col ? 6 : 12}>
                  <div style={{ width: "100%", display: "flex" }} key={index}>
                    <Component {...val} />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

export default DetailsForm;
