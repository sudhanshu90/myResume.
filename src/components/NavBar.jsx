import React, { useContext } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { Avatar, Tooltip, useMediaQuery } from "@mui/material";
import Signup from "../component_parts/auth/Signup";
import Login from "../component_parts/auth/Login";
import AuthContext from "../component_parts/auth/Context/AuthContext";
import { startCase } from "lodash";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import StyledButton from "../component_parts/sharedComponent/StyledButton";

function NavBar() {
  const userData = JSON.parse(localStorage.getItem("data"));
  const matches = useMediaQuery("(max-width:450px)");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePoper = () => {
    setAnchorEl(null);
  };

  const {
    navigate,
    signInOpen,
    signupOpen,
    signUpModalOpen,
    signInModalOpen,
    logout,
    handleClose,
  } = useContext(AuthContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0 16px",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
        }}
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              textShadow: "2px 2px 5px #000",
              cursor: "pointer",
              fontSize: matches ? "20px" : "36px",
            }}
            onClick={() => navigate("/")}
          >
            myResume.
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <div style={{ display: "flex" }}>
            {!userData && (
              <StyledButton
                title="Signup"
                onClick={() => signUpModalOpen()}
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#007e8b",
                  },
                }}
                varient="text"
              />
            )}
            {userData ? (
              <div
                className="w-full flex justify-between"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {!matches && (
                  <span>
                    Hello!,{" "}
                    {userData?.displayName || userData?.email?.split("@")?.[0]}
                  </span>
                )}
                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Tooltip title="Account settings">
                      <Avatar
                        sx={{ bgcolor: "#009e8b", width: 35, height: 35 }}
                        alt={startCase(userData?.email?.slice(0, 1))}
                        src={userData?.photoUrl || ""}
                      />
                    </Tooltip>
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClosePoper}
                  onClick={handleClosePoper}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem sx={{ fontSize: "14px" }} onClick={handleClose}>
                    <Avatar
                      sx={{ bgcolor: "#009e8b" }}
                      alt={startCase(userData?.email?.slice(0, 1))}
                      src={userData?.photoUrl || ""}
                    />{" "}
                    Profile
                  </MenuItem>
                  <Divider />
                  {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem> */}
                  <MenuItem
                    sx={{ fontSize: "14px" }}
                    onClick={(e) => logout(e)}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <StyledButton
                title="Login"
                onClick={() => signInModalOpen()}
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#ffff",
                  backgroundColor: "#EF5350",
                  "&:hover": {
                    backgroundColor: "#E57373",
                  },
                }}
                varient="text"
              />
            )}
          </div>
        </motion.div>
      </div>
      {signupOpen && <Signup open={signupOpen} handleClose={handleClose} />}
      {signInOpen && <Login open={signInOpen} handleClose={handleClose} />}
    </>
  );
}

export default NavBar;
