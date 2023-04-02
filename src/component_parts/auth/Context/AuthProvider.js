import React, { Children, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";
import auth from "../../../firebase";
import { useSnackbar } from "notistack";
import { GoogleAuthProvider } from "firebase/auth";

function AuthProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  const [loading, setLoading] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      setSignupData({
        email: "",
        password: "",
      });
    };
  }, []);

  const googleSignUp = () => {
    // signup with google
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setSignupOpen(false);
        setSignInOpen(true);
        enqueueSnackbar("Signup Successfully!", {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  const googleLogin = () => {
    // signup with google
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("data", JSON.stringify(res?._tokenResponse));
        enqueueSnackbar("Login Successfully!", {
          variant: "success",
        });
        setSignInOpen(false);
        navigate("/personal_details");
      })
      .catch((err) => {
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  function signUpModalOpen() {
    // opens signup modal
    setSignupOpen(true);
  }

  function signInModalOpen() {
    // opens login modal
    setSignInOpen(true);
  }

  function handleClose() {
    // close signup and login modal
    setSignupOpen(false);
    setSignInOpen(false);
  }

  const login = (e) => {
    // login service
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, signupData?.email, signupData?.password)
      .then((res) => {
        handleClose();
        setLoading(false);
        enqueueSnackbar("Login Successfully!", {
          variant: "success",
        });
        const data = res;
        localStorage.setItem("data", JSON.stringify(data?._tokenResponse));
        navigate("/personal_details");
      })
      .catch((err) => {
        handleClose();
        setLoading(false);
        enqueueSnackbar(err?.message, {
          variant: "error",
        });
      });
  };

  const signup = (e) => {
    // signup service
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      signupData?.email,
      signupData?.password
    )
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Signup Successfully!", {
          variant: "success",
        });
        handleClose();
        setSignInOpen(true);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err?.message, {
          variant: "error",
        });
      });
  };

  const logout = (e) => {
    // logout service
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    signOut(auth)
      .then((res) => {
        // Sign-out successful.
        //   console.log(res);
      })
      .catch((err) => {
        // An error happened.
        //   console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        loading,
        setSignupData,
        signupData,
        logout,
        signInOpen,
        signupOpen,
        signUpModalOpen,
        signInModalOpen,
        navigate,
        handleClose,
        googleSignUp,
        googleLogin,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
