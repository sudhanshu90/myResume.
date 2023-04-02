import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RegularText from "../component_parts/sharedComponent/RegularText";
import StyledButton from "../component_parts/StyledButton";

function EducationalDetails({ title = "Personal details" }) {
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

export default EducationalDetails;
