import React from "react";
import { Container } from "@mui/material";
import ScrollDownAnimation from "../scrollCardAnimation/ScrollDownAnimation";
import LandingPageHeader from "./Parts/LandingPageHeader";
import StepsGuide from "./Parts/StepsGuide";
import ImageSideText from "../ImageSideText";

function LayoutPage() {
  return (
    <React.Fragment>
      <Container>
        <LandingPageHeader />
        <ScrollDownAnimation cordinateY="500">
          <StepsGuide />
        </ScrollDownAnimation>
      </Container>
      <ImageSideText />
    </React.Fragment>
  );
}

export default LayoutPage;
