import { IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

function Accordian({ data }) {
  const responsive = useMediaQuery("(min-width:800px)");
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion
      disableGutters
      elevation={0}
      square
      {...props}
      sx={{ width: !responsive ? "300px" : "500px" }}
    />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <IconButton>
          <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
        </IconButton>
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <React.Fragment>
      {data?.map(({ id, title, desc }) => {
        return (
          <div key={id}>
            <Accordion expanded={expanded === id} onChange={handleChange(id)}>
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="step1"
                    src="assets\mr_builder\checkbox.png"
                    width={responsive ? 30 : 30}
                    height={responsive ? 30 : 30}
                    loading="lazy"
                    style={{ margin: "0 8px" }}
                  />
                  <Typography>{title}</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{desc}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Accordian;
