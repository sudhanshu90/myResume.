import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./component_parts/auth/Context/AuthProvider";
import { SnackbarProvider } from "notistack";
import Footer from "./components/footer/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./shared_component/review_card/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
  >
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <App />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </SnackbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
