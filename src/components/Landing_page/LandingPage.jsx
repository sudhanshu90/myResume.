import React from "react";
import LandingPageHeader from "./Parts/LandingPageHeader";
import StepsGuide from "./Parts/StepsGuide";
import Instructions from "./Parts/Instructions";
import { Container } from "@mui/material";

function LandingPage() {
  return (
    <React.Fragment>
      <Container>
      <LandingPageHeader />
      <StepsGuide/>
      </Container>
      <Instructions/>
    </React.Fragment>
  );
}

export default LandingPage;
