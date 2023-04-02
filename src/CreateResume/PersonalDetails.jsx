import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RegularText from "../component_parts/sharedComponent/RegularText";
import StyledButton from "../component_parts/StyledButton";

function PersonalDetails({ title = "Personal details" }) {
  const data = [
    {
      name: "First Name",
      placeholder: "Enter First Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
  ];
  return (
    <>
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <StyledButton
          //   loading={loading}
          title="Back"
          //   disabled={!signupData.email || !signupData?.password}
          //   onClick={(e) => login(e)}
          style={{
            color: "white",
            backgroundColor: "#EF5350",
            "&:hover": {
              backgroundColor: "#E57373",
            },
            padding: "8px",
            fontSize: "12px",
          }}
          varient="text"
        />
        <StyledButton
          //   loading={loading}
          title="Next"
          //   disabled={!signupData.email || !signupData?.password}
          //   onClick={(e) => login(e)}
          style={{
            color: "white",
            backgroundColor: "#EF5350",
            "&:hover": {
              backgroundColor: "#E57373",
            },
            padding: "8px",
            fontSize: "12px",
          }}
          varient="text"
        />
      </div>
    </>
  );
}

export default PersonalDetails;
