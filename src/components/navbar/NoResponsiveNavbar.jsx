import {
  Avatar,
  Container,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { startCase } from "lodash";
import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import themeColor from "../../theme";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import AuthContext from "../../component_parts/auth/Context/AuthContext";
import Button from "../../shared_component/Button";

function NoResponsiveNavbar({ navList = [] }) {
  const { userData, logout, signInModalOpen, signUpModalOpen } =
    useContext(AuthContext);

  return (
    <React.Fragment>
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
            <Logo />
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
                      width: "80px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {userData ? (
                      <Link
                        to={val.path}
                        style={{
                          textDecoration: "none",
                          textTransform: "capitalize",
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
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
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
    </React.Fragment>
  );
}

export default NoResponsiveNavbar;
