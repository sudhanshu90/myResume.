import {
  Avatar,
  Card,
  CardContent,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import themeColor from "../../theme";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ReviewSlider = ({ data }) => {
  const responsive = useMediaQuery("(min-width:800px)");
  return (
    <Carousel
      autoPlay
      animation="slide"
      indicators={false} // Hide the pagination dots
      sx={{
        width: "100%",
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
              {item.profile ? (
                <LazyLoadImage
                  src={item.profile}
                  alt="user_profile"
                  effect="blur"
                  className="person-img"
                  width="100%"
                />
              ) : (
                <Avatar
                  sx={{ width: "100%", height: "100%", fontSize: "100px" }}
                >
                  {item.fullname[0]}
                </Avatar>
              )}
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
                {!responsive
                  ? `${
                      item.desc.length > 100
                        ? `${item.desc.slice(0, 100)}...`
                        : item.desc
                    }`
                  : item.desc}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
