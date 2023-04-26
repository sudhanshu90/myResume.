import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  SwipeableDrawer,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import themeColor from "../../theme";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useContext } from "react";
import AuthContext from "../../component_parts/auth/Context/AuthContext";
import Button from "../../shared_component/Button";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CopyrightIcon from "@mui/icons-material/Copyright";
import QuizIcon from "@mui/icons-material/Quiz";
import { startCase } from "lodash";

function Navbar() {
  const { logout, userData, signInModalOpen, signUpModalOpen } =
    useContext(AuthContext);
  const responsive = useMediaQuery("(min-width:800px)");
  const [state, setState] = React.useState({
    right: false,
  });
  const navList = [
    {
      id: 1,
      title: "HOME",
      path: "/",
    },
    {
      id: 2,
      title: "TEMPLATES",
      path: "/templates",
    },
    {
      id: 3,
      title: "FAQ",
      path: "/faq",
    },
  ];

  // responsive login menu
  const loginMenu = [
    {
      id: 1,
      title: "SIGNIN",
      path: "/sign-in",
      icon: <VpnKeyIcon />,
    },
    {
      id: 2,
      title: "SIGNUP",
      path: "/sign-up",
      icon: <GroupAddIcon />,
    },
    {
      id: 3,
      title: "FAQ",
      path: "/faq",
      icon: <QuizIcon />,
    },
  ];

  const menuTop = [
    {
      id: 1,
      title: "HOME",
      icon: <HomeIcon />,
    },
    {
      id: 1,
      title: "TEMPLATES",
      icon: <AutoStoriesIcon />,
    },
    {
      id: 1,
      title: "FAQ",
      icon: <LiveHelpIcon />,
    },
  ];
  const menuBottom = [
    {
      id: 2,
      title: "LOGOUT",
      icon: <LogoutIcon />,
      path: "/logout",
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        color: themeColor.light.primary,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {userData ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
            height: "80px",
            padding: " 4px 16px",
          }}
        >
          <Avatar
            sx={{ width: "50px", height: "50px" }}
            src={userData?.photoUrl}
            alt={userData?.email || userData?.displayName}
          >
            {startCase(userData?.email?.[0]) ||
              startCase(userData?.displayName?.[0])}
          </Avatar>

          <Typography
            variant="body1"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              sx={{ fontSize: "14px", color: themeColor.light.slugText }}
            >
              &nbsp;Welcome!
            </Typography>
            <span
              style={{
                color: themeColor.light.primary,
                width: "200px",
                wordWrap: "break-word",
              }}
            >
              &nbsp;
              {startCase(userData?.displayName) ||
                userData?.email?.split("@")?.[0]}
            </span>
          </Typography>
        </div>
      ) : (
        <></>
      )}
      {userData ? (
        <List>
          {menuTop?.map((val, index) => (
            <ListItem key={val.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: themeColor.light.primary }}>
                  {val.icon}
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <></>
      )}
      <Divider />
      {userData ? (
        <List>
          {menuBottom?.map((val, index) => (
            <ListItem key={val.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: themeColor.light.primary }}>
                  {val.icon}
                </ListItemIcon>
                <Link
                  to={val.path}
                  style={{
                    textDecoration: "none",
                    color: themeColor.light.primary,
                  }}
                >
                  <ListItemText primary={val.title} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {loginMenu?.map((val, index) => (
            <ListItem key={val.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: themeColor.light.primary }}>
                  {val.icon}
                </ListItemIcon>
                <Link
                  to={val.path}
                  style={{
                    textDecoration: "none",
                    color: themeColor.light.primary,
                  }}
                >
                  <ListItemText primary={val.title} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      <Divider orientation="horizontal">v0.0.3</Divider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
        }}
      >
        <CopyrightIcon fontSize="14px" /> copyright - 2023
      </div>
    </Box>
  );

  return !responsive ? (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Paper
            elevation={3}
            style={{
              width: "100%",
              backgroundColor: themeColor.light.secondary,
              color: themeColor.light.primary,
              height: "70px",
              borderRadius: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 16px",
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
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: themeColor.light.slugText }}>
                    Resum
                  </span>
                  <span
                    style={{
                      backgroundColor: themeColor.light.primary,
                      padding: "4px 4px",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    able
                  </span>
                </div>
              </Link>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuOpenIcon htmlColor={themeColor.light.primary} />
              </IconButton>
            </div>
          </Paper>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  ) : (
    <Paper
      elevation={3}
      style={{
        width: "100%",
        backgroundColor: themeColor.light.secondary,
        color: themeColor.light.primary,
        height: "80px",
        borderRadius: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="100%">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              fontSize: "28px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              cursor: "pointer",
              textDecoration: "none",
              letterSpacing: "0.2rem",
              color: themeColor.light.primary,
            }}
          >
            <span style={{ color: themeColor.light.slugText }}>Resum</span>
            <span
              style={{
                backgroundColor: themeColor.light.primary,
                padding: "4px 4px",
                color: "white",
                borderRadius: "2px",
              }}
            >
              able
            </span>
          </Link>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navList?.map((val) => {
                return (
                  <span
                    key={val.id}
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      width: "100px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    {userData ? (
                      <Link
                        to={val.path}
                        style={{
                          textDecoration: "none",
                          color: themeColor.light.primary,
                          fontFamily: "sans-serif",
                        }}
                      >
                        {val.title}
                      </Link>
                    ) : (
                      <></>
                    )}
                  </span>
                );
              })}
            </ul>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {!userData ? (
                <>
                  <Button
                    title="Sign-in"
                    size="medium"
                    onClick={signInModalOpen}
                  />
                  <Button
                    title="Sign-up"
                    size="medium"
                    onClick={signUpModalOpen}
                  />
                </>
              ) : (
                <>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      margin: "0 16px",
                      color: themeColor.light.slugText,
                    }}
                  >
                    Welcome!&nbsp;
                    <span
                      style={{
                        color: themeColor.light.primary,
                        width: "200px",
                        fontSize: "14px",
                        wordWrap: "break-word",
                      }}
                    >
                      {startCase(userData?.displayName) ||
                        userData?.email?.split("@")?.[0]}
                    </span>
                  </Typography>
                  <IconButton aria-describedby="avatar" variant="contained">
                    <Tooltip title="profile">
                      <Avatar
                        src={userData?.photoUrl}
                        alt={userData?.email || userData?.displayName}
                      >
                        {startCase(userData?.email?.[0]) ||
                          startCase(userData?.displayName?.[0])}
                      </Avatar>
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    aria-describedby="avatar"
                    variant="contained"
                    onClick={(e) => logout(e)}
                  >
                    <Tooltip title="logout">
                      <LogoutIcon />
                    </Tooltip>
                  </IconButton>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Navbar;
