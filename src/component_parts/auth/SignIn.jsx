import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AuthContext from "./Context/AuthContext";
import { Link } from "react-router-dom";
import themeColor from "../../theme";
import { IconButton } from "@mui/material";
import Button from "../../shared_component/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function SignIn({ open }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const responsive = useMediaQuery("(min-width:800px)");

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
          open
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                height: "100%",
                maxWidth: "100%", // Set your width here
                maxHeight: "800px",
                margin: 0,
              },
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "sans-serif",
                cursor: "pointer",
                textDecoration: "none",
                letterSpacing: "0.2rem",
                color: themeColor.light.primary,
                height: "80px",
                justifyContent: "start",
                alignItems: "center",
                display: "flex",
                padding: "0 24px",
              }}
            >
              Resumetic
            </Link>
            <IconButton>
              <Link
                to="/"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                  cursor: "pointer",
                  textDecoration: "none",
                  letterSpacing: "0.2rem",
                  color: themeColor.light.primary,
                  justifyContent: "start",
                  alignItems: "center",
                  display: "flex",
                  padding: "8px",
                }}
              >
                <CloseIcon />
              </Link>
            </IconButton>
          </div>
          <DialogContent
            style={{
              margin: "0 auto",
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
              <img
                src="assets/login.png"
                alt='login_logo'
                width={!responsive ? 180 : 420}
                height={!responsive ? 180 : 400}
              />
            </div>
            <div>
              <form>
                <div style={{ width: "100%" }}>
                  <TextField
                    id="email"
                    fullWidth
                    sx={{ margin: "12px 0" }}
                    label="Email ID"
                    placeholder="Enter email"
                    variant="outlined"
                    type="email"
                    required
                    value={signupData.email}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="password"
                    fullWidth
                    sx={{ margin: "16px 0" }}
                    label="Password"
                    placeholder="Enter password"
                    variant="outlined"
                    type="password"
                    required
                    value={signupData.password}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                      fullWidth
                      size="large"
                      onClick={(e) => login(e)}
                      loading={loading}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IconButton onClick={googleLogin}>
                        <img src="https://img.icons8.com/color/36/null/google-logo.png" alt='google_logo' />
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
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    </>
  );
}
