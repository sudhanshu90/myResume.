import React from "react";

function DetailsForm() {
  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          padding: "18px",
          margin: "2px 0",
          overflowY: "scroll",
          height: "450px",
        }}
      >
        <Typography
          sx={{ padding: "8px 0", marginBottom: "12px" }}
          variant="h6"
          textAlign="center"
          color="#36a298"
        >
          {title}
        </Typography>
        <div
          style={{
            border: "2px solid #36a298",
            borderRadius: "5px",
            padding: "16px",
            minHeight: "350px",
          }}
        >
          <Grid container spacing={2} color="white">
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
