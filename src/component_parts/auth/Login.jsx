import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import StyledButton from "../sharedComponent/StyledButton";
import AuthContext from "./Context/AuthContext";
import GoogleButton from "react-google-button";

export default function Login({ open }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    loading,
    signupData,
    login,
    setSignupData,
    handleClose,
    googleLogin,
    signUpModalOpen,
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
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "600px", // Set your width here
              },
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="500"
            color="#007e8b"
            padding="16px"
          >
            Log in
          </Typography>
          <DialogContent dividers>
            <form>
              <TextField
                id="email"
                fullWidth
                sx={{ margin: "16px 0" }}
                label="Email ID"
                variant="standard"
                type="email"
                required
                value={signupData.email}
                onChange={handleInputChange}
              />

              <TextField
                id="password"
                fullWidth
                sx={{ margin: "16px 0" }}
                label="Password"
                variant="standard"
                type="password"
                required
                value={signupData.password}
                onChange={handleInputChange}
              />
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
                  <GoogleButton
                    label="Login with Google"
                    onClick={googleLogin}
                  />
                  <StyledButton
                    title="Create new account"
                    onClick={() => {
                      handleClose();
                      signUpModalOpen();
                    }}
                    style={{
                      fontSize: "12px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                    varient="outlined"
                  />
                </span>
              </Typography>
            </div>
          </DialogContent>
          <DialogActions>
            <StyledButton
              title="Cancel"
              disabled={loading}
              onClick={handleClose}
              style={{
                color: "#007e8b",
                "&:hover": {
                  color: "#ffff",
                  backgroundColor: "#007e8b",
                },
                padding: "8px",
                fontSize: "12px",
              }}
              varient="text"
            />

            <StyledButton
              loading={loading}
              title="Submit"
              autoFocus
              disabled={!signupData.email || !signupData?.password}
              onClick={(e) => login(e)}
              style={{
                color: "white",
                backgroundColor: "#EF5350",
                "&:hover": {
                  backgroundColor: "#E57373",
                },
                padding: "8px",
                fontSize: "12px",
              }}
              varient="text"
            />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
