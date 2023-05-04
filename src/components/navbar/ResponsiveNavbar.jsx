import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import themeColor from "../../theme";
import Logo from "./Logo";
import AuthContext from "../../component_parts/auth/Context/AuthContext";
import { startCase } from "lodash";
import { Link } from "react-router-dom";

function ResponsiveNavbar({ menuBottom = [], loginMenu = [], menuTop = [] }) {
  const { userData } = useContext(AuthContext);
  const [state, setState] = React.useState({
    right: false,
  });

  // open navigation menu in mobile view
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

  // mobile navigation that render conditionaly before login and after login
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
      {/* // will render logo in navigation */}
      <Logo />
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
          color: themeColor.light.secondaryText,
        }}
      >
        <CopyrightIcon fontSize="14px" /> 2023 - Resumable
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: themeColor.light.secondaryText,
        }}
      >
        All rights reserved
      </div>
    </Box>
  );

  return (
    <React.Fragment>
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
              }}
            >
              <Logo />
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                sx={{ padding: "0 16px" }}
              >
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
    </React.Fragment>
  );
}

export default ResponsiveNavbar;
