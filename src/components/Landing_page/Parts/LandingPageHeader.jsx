import {  Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import themeColor from "../../../theme";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Button from "../../../shared_component/Button";
import AuthContext from "../../../component_parts/auth/Context/AuthContext";
import VideoPlayModal from "../../../shared_component/media/VideoPlayModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LandingPageHeader() {
  const responsive = useMediaQuery("(min-width:800px)");
  const { signInModalOpen } = useContext(AuthContext);
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "row" : "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: !responsive ? "20px 0 20px 0" : "36px 0 36px 0",
        }}
      >
        <div style={{ width: responsive ? "80%" : "100%" }}>
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            style={{
              margin: responsive ? "32px 0" : "32px auto",
            }}
          >
            <Typography
              variant="subtitle2"
              fontFamily="Lucida Sans"
              color="GrayText"
            >
              Resume Builder
            </Typography>
            <Typography
              variant={responsive ? "h3" : "h4"}
              fontFamily="Rockwell"
              sx={{
                letterSpacing: "3px",
                fontWeight: responsive ? "200" : "100",
                color: themeColor.light.primaryText,
              }}
            >
              Crafting your perfect resume in just 5 minutes!
              <br />
            </Typography>
            <Typography
              marginTop="16px"
              fontFamily="Lucida Sans"
              lineHeight={!responsive ? "" : 1.7}
              color={themeColor.light.secondaryText}
            >
              Our resume builder website is designed to help job seekers create
              professional, polished resumes quickly and easily. Our
              user-friendly interface makes it simple to input your information,
              choose a template, and generate a high-quality resume that
              highlights your skills and experience.
            </Typography>
            <div style={{ marginTop: responsive ? "12px" : "20px" }}>
              <Button
                title="Build My Resume"
                size="large"
                endIcon={<KeyboardDoubleArrowRightIcon />}
                onClick={signInModalOpen}
                noMargin
                variant="outlined"
              />
              <Button
                title="Watch video"
                style={{ margin: "0 8px" }}
                size="large"
                endIcon={<PlayCircleIcon />}
                onClick={() => setOpenVideo(true)}
                noMargin
                variant="text"
              />
            </div>
          </motion.div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div initial={{ opacity: "0%" }} animate={{ opacity: "100%" }}>
            <LazyLoadImage
              alt="landing_page_image"
              width={responsive ? 300 : 200}
              height={responsive ? 390 : 250}
              effect="blur"
              style={{ transform: "scaleX(-1)" }}
              src="assets/mr_builder/3d.png" 
            />
          </motion.div>
        </div>
        {openVideo && (
          <VideoPlayModal
            open={openVideo}
            handleClose={() => setOpenVideo(false)}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default LandingPageHeader;
