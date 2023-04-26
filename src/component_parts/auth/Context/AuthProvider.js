import React, { useEffect, useState } from "react";
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

  const googleLogin = async () => {
    // signup with google
    setLoading(true);
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("data", JSON.stringify(res?._tokenResponse));
        enqueueSnackbar("Login Successfully!", {
          variant: "success",
        });
        setSignInOpen(false);
        navigate("/personal_details");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  function signUpModalOpen() {
    // opens signup modal
    navigate("/sign-up");
  }

  function signInModalOpen() {
    // opens login modal
    if (!userData) {
      navigate("/sign-in");
    } else {
      navigate("/build");
    }
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
        setLoading(false);
        enqueueSnackbar("Login Successfully!", {
          variant: "success",
        });
        const data = res;
        localStorage.setItem("data", JSON.stringify(data?._tokenResponse));
        navigate("/build");
      })
      .catch((err) => {
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
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
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
    signOut(auth);
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
