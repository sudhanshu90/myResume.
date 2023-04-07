import { Container } from "@mui/material";
import React, { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PreviewResume from "../CreateResume/PreviewResume";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import { Outlet } from "react-router";
import StyledButton from "../component_parts/sharedComponent/StyledButton";
import AuthContext from "../component_parts/auth/Context/AuthContext";

export default function ResumePage() {
  const userData = JSON.parse(localStorage.getItem("data"));
  const { navigate } = useContext(AuthContext);
  return (
    <div
      style={{
        color: "#ffff",
      }}
    >
      <NavBar />
      <Container maxWidth="xl">
        <div style={{ padding: "16px 0" }}>
          <LinearProgress
            variant="buffer"
            value={50}
            aria-valuetext="pppppp"
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#003859",
              },
            }}
            valueBuffer={0}
          />
        </div>
        <Grid container spacing={1}>
          <Grid width="100%" xl={9}>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <StyledButton
                //   loading={loading}
                title="Back"
                //   disabled={!signupData.email || !signupData?.password}
                onClick={(e) => navigate("/educational_details")}
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
                onClick={(e) => navigate("/personal_details")}
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
          </Grid>

          <Grid xl={3} width="100%">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <PreviewResume />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
