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
  const {
    loading,
    signupData,
    login,
    setSignupData,
    googleLogin,
    signUpModalOpen,
  } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              src="assets/mr_builder/signin.png"
              alt="login_logo"
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
                      onClick={(e) => login(e)}
                      noMargin
                      loading={loading}
                      variant="outlined"
                      disabled={!signupData.email || !signupData.password}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IconButton onClick={googleLogin}>
                        <img
                          src="https://img.icons8.com/color/36/null/google-logo.png"
                          alt="google_logo"
                        />
                      </IconButton>
                      <Typography variant="body1">or</Typography>
                      <Typography variant="subtitle1">
                        I am not registered —{" "}
                        <Button
                          title="Sign Up"
                          variant="text"
                          onClick={signUpModalOpen}
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
