import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AuthContext from "./Context/AuthContext";
import StyledButton from "../StyledButton";

export default function Signup({ open }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    loading,
    signupData,
    signup,
    setSignupData,
    handleClose,
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
          Sign up
        </Typography>
        <DialogContent dividers>
          <form>
            <TextField
              id="email"
              sx={{ margin: "16px 0" }}
              fullWidth
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
            <StyledButton
              title="Already have an account? Login "
              onClick={() => {
                handleClose();
                signInModalOpen();
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
            onClick={(e) => signup(e)}
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
  );
}
