import React from "react";
import { Container } from "@mui/material";
import LandingPageHeader from "./Parts/LandingPageHeader";
import BuilderIntroduction from "./Parts/BuilderIntroduction";
import TemplateChooseGuide from "./Parts/TemplateChooseGuide";
import ReviewCard from "../../shared_component/review_card/ReviewCard";

function LayoutPage() {
  return (
    <React.Fragment>
      <Container>
        <LandingPageHeader />
        <BuilderIntroduction />
      </Container>
      <TemplateChooseGuide />
      <Container>
        <ReviewCard />
      </Container>
    </React.Fragment>
  );
}

export default LayoutPage;
