import { Container } from "@mui/material";
import React, { useContext } from "react";
import HomepageInstructions from "./HomepageInstructions";
import NavBar from "./NavBar";
import HomePageHeader from "./HomePageHeader";
import Footer from "./Footer";
import AuthContext from "../component_parts/auth/Context/AuthContext";

function LandingPage() {
  const { navigate, userData, signInModalOpen } = useContext(AuthContext);

  function ResumePage() {
    if (userData) {
      navigate("/personal_details");
    } else {
      signInModalOpen();
    }
  }

  function chooseTemplates() {
    navigate("choose_templates");
  }
  return (
    <div
      style={{
        color: "#ffff",
      }}
    >
      <NavBar />
      <Container>
        <HomePageHeader
          ResumePage={ResumePage}
          chooseTemplates={chooseTemplates}
        />
        <HomepageInstructions />
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;
