import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PreviewResume from "../CreateResume/PreviewResume";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import { Outlet } from "react-router";

export default function ResumePage() {
  const userData = JSON.parse(localStorage.getItem("data"));
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
            sx={{ backgroundColor: 'white',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#003859'
            }}}
            valueBuffer={0}
          />
        </div>
        <Grid container spacing={1}>
          <Grid width="100%" xl={8}>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
             <Outlet/>
            </motion.div>
          </Grid>
          <Grid xl={4} width="100%">
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
