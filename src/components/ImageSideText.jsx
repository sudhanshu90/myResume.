import React from "react";
import { Container, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../theme";
import Button from "../shared_component/Button";
import ScrollDownAnimation from "./scrollCardAnimation/ScrollDownAnimation";

function ImageSideText() {
  const responsive = useMediaQuery("(min-width:800px)");

  return (
    <React.Fragment>
      <div
        style={{
          padding: "64px 32px",
          margin: !responsive ? "20px 0 20px 0" : "36px 0 36px 0",
          background:
            "linear-gradient(193deg, rgba(35,153,255,0.8800770308123249) 0%, rgba(181,221,255,1) 100%)",
          boxShadow: "2px 2px 5px gray",
        }}
      >
        <ScrollDownAnimation cordinateY={!responsive ? "1200" : "800"}>
          <Container
            sx={{
              display: "flex",
              flexDirection: responsive ? "row" : "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div>
              <img
                alt="choose_template"
                src="assets\chooseTemp.png"
                width={!responsive ? 250 : 400}
                height={!responsive ? 250 : 450}
                style={{ borderRadius: "5px" }}
                loading="lazy"
              />
            </div>
            <div style={{ width: !responsive ? "100%" : "40%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "32px",
                  fontWeight: "400",
                  letterSpacing: !responsive ? "8px" : "12px",
                  textAlign: "left",
                  color: themeColor.light.secondary,
                }}
              >
                Pick Professional
                <br />
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: !responsive ? "32px" : "48px",
                    fontWeight: "600",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: themeColor.light.slugText,
                  }}
                >
                  Template
                </span>
              </Typography>
              <Typography sx={{ color: themeColor.light.slugText }}>
                Choose the best resume template for your needs and showcase your
                skills and qualifications effectively. Find tips on selecting a
                layout, design, and format that highlights your strengths and
                appeals to potential employers.
              </Typography>

              <Button
                title="Choose template"
                style={{
                  marginTop: "8px",
                  backgroundColor: themeColor.light.secondaryText,
                }}
              />
              <Button
                title="Tips"
                style={{
                  marginTop: "8px",
                  backgroundColor: themeColor.light.secondaryText,
                }}
              />
            </div>
          </Container>
        </ScrollDownAnimation>
      </div>
    </React.Fragment>
  );
}

export default ImageSideText;
