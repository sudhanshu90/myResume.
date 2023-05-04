import React from "react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../../theme";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BuilderIntroduction() {
  const responsive = useMediaQuery("(min-width:800px)");

  return (
    <React.Fragment>
      <Divider orientation="horizontal" />
      <React.Fragment>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              borderRadius: "32px",
              width: "100%",
              margin: !responsive ? "16px auto" : "46px auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                textAlign="center"
                letterSpacing="3px"
                variant={responsive ? "h4" : "h5"}
                fontFamily="sans-serif"
              >
                Meet{" "}
                <span
                  style={{
                    color: themeColor.light.primary,
                    fontWeight: "bold",
                  }}
                >
                  Mr.Builder
                </span>
                <Typography width={responsive ? 550 : 300}>
                  He is the resume expert who will help you build a job-ready
                  resume and provide valuable tips to get noticed by employers.
                </Typography>
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: !responsive ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ margin: "32px 32px" }}>
                  <LazyLoadImage
                    alt="step1"
                    src="assets\mr_builder\hello_builder.png"
                    width={responsive ? 320 : 220}
                    height={responsive ? 250 : 180}
                    style={{ borderRadius: "28px" }}
                    effect="blur"
                    loading="lazy"
                  />
                </div>
                <div>
                  <Typography>
                    Hi, I understand that job hunting can be tough and that not
                    every job application leads to a successful offer. That's
                    why I am here to help you turn that rejection into a
                    positive experience. If your resume was not selected for a
                    role, don't worry - I can help you get closer to your dream
                    job.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      <Divider orientation="horizontal" />
    </React.Fragment>
  );
}

export default BuilderIntroduction;
