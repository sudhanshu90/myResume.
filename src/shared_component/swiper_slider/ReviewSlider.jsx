import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import themeColor from "../../theme";

const ReviewSlider = ({ data }) => {
  return (
    <Carousel
      autoPlay
      animation="slide"
      indicators={false} // Hide the pagination dots
      sx={{
        width:"100%",
        border: `0.5px solid ${themeColor.light.primary}`,
        borderRadius: "5px",
      }}
    >
      {data?.map((item) => (
        <div style={{ display: "flex" }}>
          <Card
            key={item.id}
            style={{
              width: "100%",
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="img-container">
              <img
                src={item.image === "" ? "assets/user.png" : item.image}
                alt="user_profile"
                className="person-img"
                loading="lazy"
              />
              <span className="quote-icon">
                <FormatQuoteIcon />
              </span>
            </div>

            <CardContent>
              <Typography
                variant="h6"
                color={themeColor.light.primary}
                component="h2"
                textAlign="center"
                marginBottom={4}
              >
                {item.title}
                <Typography
                  variant="subtitle2"
                  color={themeColor.light.disabled}
                  component="h2"
                  textAlign="center"
                >
                  ({item.role})
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  wordWrap: "break-word",
                  width: "90%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
