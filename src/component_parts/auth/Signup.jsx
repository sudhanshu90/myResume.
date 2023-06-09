import React, { useContext, useEffect } from "react";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthContext from "./Context/AuthContext";
import { IconButton, Paper } from "@mui/material";
import Button from "../../shared_component/Button";
import { TextFieldType } from "../../shared_component/form/TextFieldType";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SignIn() {
  const responsive = useMediaQuery("(min-width:800px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    loading,
    signupData,
    signup,
    setSignupData,
    googleSignUp,
    signInModalOpen,
  } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setSignupData((prevProps) => ({
      ...prevProps,
      [id]: value,
    }));
  };

  return (
    <>
      <div>
        <DialogContent
          style={{
            width: !responsive ? "100%" : "60%",
            margin: "10vh auto",
            display: responsive ? "flex" : "",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <LazyLoadImage
              width={!responsive ? 150 : 300}
              height={!responsive ? 200 : 400}
              effect="blur"
              src="assets/mr_builder/signup.png"
              alt="signup_img"
            />
          </div>
          <Paper elevation={6} sx={{ padding: "16px 16px" }}>
            <div>
              <form>
                <div style={{ width: "100%" }}>
                  <TextFieldType
                    id="email"
                    title="Email ID"
                    placeholder="Enter email"
                    variant="outlined"
                    type="email"
                    value={signupData.email}
                    onChange={handleInputChange}
                  />
                  <TextFieldType
                    id="password"
                    title="Password"
                    placeholder="Enter password"
                    variant="outlined"
                    type="password"
                    value={signupData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "16px 0 0 0",
                }}
              >
                <Typography variant="subtitle1">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      title="Submit"
                      size="large"
                      onClick={(e) => signup(e)}
                      noMargin
                      loading={loading}
                      variant="outlined"
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IconButton onClick={googleSignUp}>
                        <img
                          src="https://img.icons8.com/color/36/null/google-logo.png"
                          alt="google_logo"
                        />
                      </IconButton>
                      <Typography variant="body1">or</Typography>
                      <Typography variant="subtitle1">
                        Already have an account? —
                        <Button
                          title="Sign In"
                          variant="text"
                          onClick={signInModalOpen}
                        />
                      </Typography>
                    </div>
                  </span>
                </Typography>
              </div>
            </div>
          </Paper>
        </DialogContent>
      </div>
    </>
  );
}
