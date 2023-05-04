import {
  Drawer,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React from "react";
import {  TextFieldType } from "../form/TextFieldType";

export const ReviewDetailsFillModal = ({ open, handleClose, value }) => {
  const responsive = useMediaQuery("(min-width:800px)");
  const submitReviews = (e) => {
    axios
      .post("https://myresume-9253e-default-rtdb.firebaseio.com/reviews.json", {
        name: "sudhanshu",
        reviews: e.target.value,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <React.Fragment>
      <div>
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer anchor={anchor} open={open} onClose={handleClose}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "16px 16px",
                }}
              >
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" ,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: !responsive ? "100%" : "70%",
                  margin: "0 auto",
                  height: "80vh",
                  textAlign: "center",
                  padding:'0 8px'
                }}
              >
                <Typography variant="caption">
                  Your selected rating stars<br/>
                  <Rating
                    name="no-value"
                    value={value}
                    readOnly
                    sx={{ fontSize: "48px", margin: "0 0 16px 0" }}
                  />
                  <br />
                  <Typography variant="subtitle2">
                    Your feedback is highly appreciated and will help us to
                    improve our service. <b>~ResumableTeam</b>
                  </Typography>
                </Typography>
                <div style={{ height: "200px", width: "200px" }}>
                  <img
                    alt="review_img"
                    src="assets\reviews.png"
                    height="100%"
                    width="100%"
                  />
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
               <TextFieldType/>

           
                </div>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
