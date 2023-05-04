import React, { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Rating, Typography, useMediaQuery } from "@mui/material";
import themeColor from "../../theme";
import { ReviewDetailsFillModal } from "./ReviewDetailsFillModal";

const ReviewCard = () => {
  const people = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
  ];
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const responsive = useMediaQuery("(min-width:800px)");
  const [openModal, setOpenModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  let nextReview;
  useEffect(() => {
    nextReview = setInterval(() => {
      nextPerson();
    }, 5000);
  }, [nextReview]);

  //review bottom drawer close
  const closeReviewModal = () => {
    setOpenModal(false);
  };

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
        variant={responsive ? "h4" : "h5"}
        fontFamily="sans-serif"
        sx={{ color: themeColor.light.primary, fontWeight: "bold" }}
      >
        People Love Our Resumable.
      </Typography>
      <Rating
        name="no-value"
        value={4}
        sx={{ fontSize: "48px", margin: "0 0 16px 0" }}
        onChange={(e) => {
          setOpenModal(true);
          setRatingValue(e.target.value);
        }}
      />
      <article
        className="review"
        style={{
          height: !responsive ? "400px" : "380px",
        }}
      >
        <div className="img-container">
          <img src={image} alt={name} className="person-img" loading="lazy" />
          <span className="quote-icon">
            <FormatQuoteIcon />
          </span>
        </div>
        <div style={{ height: !responsive ? "200px" : "100px" }}>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">
            {text.length > 200 ? `${text?.slice(0, 200)}...` : text}
          </p>
        </div>
      </article>
      {openModal && (
        <ReviewDetailsFillModal
          open={openModal}
          value={ratingValue}
          handleClose={closeReviewModal}
        />
      )}
    </div>
  );
};

export default ReviewCard;
