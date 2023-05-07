import React from "react";
import { useMediaQuery } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import QuizIcon from "@mui/icons-material/Quiz";
import ResponsiveNavbar from "./ResponsiveNavbar";
import NoResponsiveNavbar from "./NoResponsiveNavbar";
import ReviewsIcon from "@mui/icons-material/Reviews";

function Navbar() {
  const responsive = useMediaQuery("(min-width:800px)");

  // desktop navigation menu
  const navList = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Templates",
      path: "/templates",
    },
    {
      id: 3,
      title: "Reviews",
      path: "/write_your_review",
    },
    {
      id: 4,
      title: "Faq",
      path: "/faq",
    },
  ];

  // responsive login menu
  const loginMenu = [
    {
      id: 1,
      title: "Sign In",
      path: "/sign-in",
      icon: <VpnKeyIcon />,
    },
    {
      id: 2,
      title: "Sign Up",
      path: "/sign-up",
      icon: <GroupAddIcon />,
    },
    {
      id: 3,
      title: "Reviews",
      path: "/write_your_review",
      icon: <ReviewsIcon />,
    },
    {
      id: 4,
      title: "Faq",
      path: "/faq",
      icon: <QuizIcon />,
    },
  ];

  // responsive navigation menu
  const menuTop = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "Templates",
      path: "/templates",
      icon: <AutoStoriesIcon />,
    },
    {
      id: 3,
      title: "Reviews",
      path: "/write_your_review",
      icon: <ReviewsIcon />,
    },
    {
      id: 4,
      title: "Faq",
      path: "/faq",
      icon: <LiveHelpIcon />,
    },
  ];
  const menuBottom = [
    {
      id: 1,
      title: "Logout",
      icon: <LogoutIcon />,
      path: "/logout",
    },
  ];

  return !responsive ? (
    <ResponsiveNavbar
      menuBottom={menuBottom}
      menuTop={menuTop}
      loginMenu={loginMenu}
    />
  ) : (
    <NoResponsiveNavbar navList={navList} />
  );
}

export default Navbar;
