import { Card, CardContent, Rating, Typography } from "@mui/material";
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
        width: "60%",
        border: `0.5px solid ${themeColor.light.primary}`,
        borderRadius: "5px",
      }}
    >
      {data?.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
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
                src={item.profile === "" ? "assets/user.png" : item.profile}
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
                sx={{ textTransform: "capitalize" }}
              >
                {item.fullname}
                <Typography
                  variant="subtitle2"
                  color={themeColor.light.disabled}
                  component="h2"
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  ({item.role})
                </Typography>
                <Rating
                readOnly
                  name="no-value"
                  value={item?.rating}
                  sx={{ color: themeColor.light.primary }}
                />
              </Typography>

              <Typography
                variant="body2"
                component="p"
                sx={{
                  wordWrap: "break-word",
                  width: "90%",
                  textAlign: "center",
                  margin: "0 auto",
                  textTransform: "capitalize",
                }}
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
