import React from "react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../../theme";
import Accordian from "../../../shared_component/accordian/Accordian";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BuilderIntroduction() {
  const responsive = useMediaQuery("(min-width:800px)");

  const templateChooseGuide = [
    {
      id: 1,
      title: "Look for readability",
      desc: "Your resume should be easy to read, so look for templates with clear fonts and enough white space. Avoid templates that are too cluttered or difficult to read.",
    },
    {
      id: 2,
      title: "Keep it professional",
      desc: " While it's important to stand out, your resume should still maintain a professional appearance. Avoid templates that are too flashy or unprofessional-looking.",
    },
    {
      id: 3,
      title: "Choose the right format",
      desc: "Depending on your work experience and industry, certain resume formats may work better than others. For example, a chronological format is best for those with a clear work history, while a functional format is best for those with gaps in employment or changing careers.",
    },
    {
      id: 4,
      title: "Consider your personal style",
      desc: " Choose a template that fits your personal style and allows you to showcase your strengths. This will help you feel confident and make a great first impression with potential employers.",
    },
    {
      id: 5,
      title: "Consider the job you're applying for",
      desc: "The template you choose should align with the industry and job you're applying for. For example, if you're applying for a creative role, you may want to choose a template with more design elements, while a more traditional role may require a more straightforward template.",
    },
  ];

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
                <span
                  style={{
                    color: themeColor.light.primary,
                    fontWeight: "bold",
                  }}
                >
                  Hi,
                </span>
                <Typography width={responsive ? 550 : 300}>
                  Certainly, I'd be happy to guide you on how to choose a resume
                  template!
                </Typography>
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: !responsive ? "column" : "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div style={{ margin: "16px 0" }}>
                  <Accordian data={templateChooseGuide} />
                </div>
                <div style={{ margin: "32px 32px" }}>
                  <LazyLoadImage
                    alt="step1"
                    src="assets\mr_builder\builderGuideYou.png"
                    width={responsive ? 250 : 180}
                    height={responsive ? 250 : 180}
                    style={{ borderRadius: "28px" }}
                    effect="blur"
                    loading="lazy"
                  />
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
