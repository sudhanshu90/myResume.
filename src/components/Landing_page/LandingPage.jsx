import React from "react";
import { Container } from "@mui/material";
import LandingPageHeader from "./Parts/LandingPageHeader";
import CustomerReviews from "./Parts/CustomerReviews";
import BuilderIntroduction from "./Parts/BuilderIntroduction";
import TemplateChooseGuide from "./Parts/TemplateChooseGuide";

function LayoutPage() {
  return (
    <React.Fragment>
      <Container>
        <LandingPageHeader />
        <BuilderIntroduction />
      </Container>
      <TemplateChooseGuide />
      <Container>
        <CustomerReviews />
      </Container>
    </React.Fragment>
  );
}

export default LayoutPage;
