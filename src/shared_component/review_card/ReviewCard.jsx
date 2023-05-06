import React from "react";
import { Rating, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../theme";
import ReviewSlider from "../swiper_slider/ReviewSlider";
import Button from "../Button";
import { useNavigate } from "react-router";

const ReviewCard = () => {
  const responsive = useMediaQuery("(min-width:800px)");
  const navigate = useNavigate();
  const userData = [
    {
      id: 1,
      title: "Akash Sharma",
      role: "Backend developer",
      image: "",
      description:
        "I've been using this product for several months now and it has completely transformed my daily routine. It's user-friendly and the features are incredibly helpful.",
    },
    {
      id: 2,
      title: "Sudhanshu Sharma",
      role: "Frontend developer",
      image: "",
      description:
        "I've been using this product for several months now and it has completely transformed my daily routine. It's user-friendly and the features are incredibly helpful.",
    },
    {
      id: 3,
      title: "Kiran dora",
      role: "Quality analyst",
      image: "",
      description:
        "I've been using this product for several months now and it has completely transformed my daily routine. It's user-friendly and the features are incredibly helpful.",
    },
    {
      id: 4,
      title: "Rajesh parida",
      role: "Software developer",
      image: "",
      description:
        "I've been using this product for several months now and it has completely transformed my daily routine. It's user-friendly and the features are incredibly helpful.",
    },
    {
      id: 5,
      title: "Shantanu Yadav",
      role: "Senior software developer",
      image: "",
      description:
        "I've been using this product for several months now and it has completely transformed my daily routine. It's user-friendly and the features are incredibly helpful.",
    },
  ];

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
        <Button title="write a review" onClick={()=>navigate('/write_your_review')}/>
      </Typography>
      <ReviewSlider data={userData} />
    </div>
  );
};

export default ReviewCard;
