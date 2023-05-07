import React, { useContext, useEffect } from "react";
import {
  Divider,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import themeColor from "../../theme";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TextFieldType } from "../../shared_component/form/TextFieldType";
import Button from "../../shared_component/Button";
import AuthContext from "../../component_parts/auth/Context/AuthContext";
import Loader from "../../shared_component/loader/Loader";

function UserReviewForm() {
  const responsive = useMediaQuery("(min-width:800px)");
  const {
    loading,
    submitReview,
    reviewData,
    rating,
    setReviewData,
    setRating,
    reviewsListLoad,
  } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handelChange = (event) => {
    const { id, value } = event.target;
    setReviewData((preData) => ({
      ...preData,
      [id]: value,
    }));
  };

  const formData = [
    {
      key: 1,
      id: "fullname",
      Component: TextFieldType,
      title: "Author Name or Nickname",
      placeholder: "Enter Author Name or Nickname",
      required: true,
      type: "text",
      value: reviewData.fullname,
    },
    {
      key: 2,
      id: "role",
      Component: TextFieldType,
      title: "Role or Profession",
      placeholder: "Enter Role or Profession",
      required: true,
      type: "text",
      value: reviewData.role,
    },
    {
      key: 3,
      id: "desc",
      Component: TextFieldType,
      title: "Your review",
      placeholder: "Enter your review",
      required: false,
      type: "text",
      textarea: true,
      value: reviewData.desc,
    },
  ];
  if (reviewsListLoad) {
    return <Loader />;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: !responsive ? "column" : "",
        padding: "5rem",
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
          width={responsive ? 600 : 300}
          marginBottom={4}
        >
          <Typography variant="h5" gutterBottom>
            Write a Review
          </Typography>
          Thank you for visiting our{" "}
          <span style={{ color: themeColor.light.primary }}>Resumable!</span> We
          appreciate your feedback and would love to hear about your experience.
          Please leave a review below and tell us what you loved about our
          plateform, product, or services. Your feedback helps us improve and
          provide better experiences for our visitors. Thank you for your time!
        </Typography>
        <div
          style={{
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoadImage
            alt="img_not_found"
            effect="blur"
            src="assets/reviewPage.png"
          />
        </div>
      </div>
      <Divider
        orientation="horizontal"
        sx={{
          backgroundColor: themeColor.light.primary,
          height: !responsive ? "3px" : "400px",
          width: !responsive ? "300px" : "3px",
          margin: "32px 0",
        }}
      />
      <Paper
        elevation={5}
        sx={{ padding: "16px", width: !responsive ? "350px" : "500px" }}
      >
        <Typography paddingLeft={0.5}>Give your rating</Typography>
        <Rating
          name="no-value"
          value={rating}
          sx={{ fontSize: "36px", color: themeColor.light.primary }}
          onChange={(e) => setRating(parseInt(e.target.value, 10))}
        />
        {formData?.map(
          ({
            Component,
            id,
            key,
            title,
            placeholder,
            value,
            required,
            message,
            textarea,
          }) => {
            return (
              <Component
                key={key}
                id={id}
                title={title}
                placeholder={placeholder}
                onChange={handelChange}
                value={value}
                required={required}
                message={message}
                textarea={textarea}
              />
            );
          }
        )}
        <Button
          title="Submit review"
          noMargin
          onClick={submitReview}
          loading={loading}
          disabled={
            !reviewData.fullname ||
            !rating ||
            !reviewData.desc ||
            !reviewData.role
          }
        />
      </Paper>
    </div>
  );
}

export default UserReviewForm;
