import React, { useContext } from "react";
import { Rating, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../theme";
import ReviewSlider from "../swiper_slider/ReviewSlider";
import Button from "../Button";
import { useNavigate } from "react-router";
import AuthContext from "../../component_parts/auth/Context/AuthContext";
import Loader from "../loader/Loader";

const ReviewCard = () => {
  const responsive = useMediaQuery("(min-width:800px)");
  const { reviewsListLoad, reviewsList } = useContext(AuthContext);
  const navigate = useNavigate();

  if (reviewsListLoad) {
    return <Loader />;
  }
  return (
    <div
      style={{
        margin: "3em 0 3em 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <Typography
        textAlign="center"
        letterSpacing="3px"
        variant={responsive ? "h5" : "h5"}
        fontFamily="sans-serif"
        marginBottom={4}
        sx={{ color: themeColor.light.primary, fontWeight: "bold" }}
      >
        People Love Our Resumable.
        <br />
        <Rating
          name="no-value"
          readOnly
          value={4}
          sx={{ fontSize: "36px", color: themeColor.light.primary }}
        />
        <br />
        <Button
          title="write a review"
          onClick={() => navigate("/write_your_review")}
        />
      </Typography>
      <ReviewSlider data={reviewsList} />
    </div>
  );
};

export default ReviewCard;
