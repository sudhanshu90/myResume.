import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import auth, { db } from "../../../firebase";
import { useSnackbar } from "notistack";
import { GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getDocs } from "@firebase/firestore";

function AuthProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("data"));
  // handel states
  const [loading, setLoading] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [reviewData, setReviewData] = useState({});
  const [rating, setRating] = useState(0);
  const [reviewsList, setReviewsList] = useState([]);
  const [reviewsListLoad, setReviewsListLoad] = useState(true);
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  // signup form empty after submit
  useEffect(() => {
    return () => {
      setSignupData({
        email: "",
        password: "",
      });
    };
  }, []);

  // fetch reviews list
  const reviewsListFetch = async () => {
    setReviewsListLoad(true);
    const userReviewsRef = collection(db, "reviews");
    const result = await getDocs(userReviewsRef);
    setReviewsList(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setReviewsListLoad(false);
  };

  // fetch reviews-list when component mount
  useEffect(() => {
    reviewsListFetch();
  }, []);

  // goto home function
  const goToHome = () => {
    navigate("/");
  };

  // signup with google
  const googleSignUp = () => {
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

  // signup with google
  const googleLogin = async () => {
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
        if (location.state === "write_your_review") {
          navigate("write_your_review");
        } else {
          navigate("/personal_details");
        }
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  // opens signup modal
  function signUpModalOpen() {
    if (location.state === "write_your_review") {
      navigate("/sign-up", { state: `${location.state}` });
    } else {
      navigate("/sign-up");
    }
  }

  // opens login modal
  function signInModalOpen() {
    if (!userData) {
      navigate("/sign-in");
    } else {
      navigate("/build");
    }
  }

  // close signup and login modal
  function handleClose() {
    setSignupOpen(false);
    setSignInOpen(false);
  }

  // login service with email and password
  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, signupData?.email, signupData?.password)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Login Successfully!", {
          variant: "success",
        });
        const data = res;
        localStorage.setItem(
          "data",
          JSON.stringify({ ...data?._tokenResponse, photoUrl: "" })
        );
        if (location.state === "write_your_review") {
          navigate("write_your_review");
        } else {
          navigate("/build");
        }
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err?.message, {
          variant: "error",
        });
      });
  };

  // signup service with email and password
  const signup = (e) => {
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
          if (location.state === "write_your_review") {
            navigate("sign-in", { state: "write_your_review" });
          } else {
            navigate("sign-in");
          }
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err?.message, {
          variant: "error",
        });
      });
  };

  // logout service
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    signOut(auth);
  };

  // submit reviews
  const submitReview = async () => {
    const userReviewsRef = collection(db, "reviews");
    if (userData) {
      setLoading(true);
      await addDoc(userReviewsRef, {
        ...reviewData,
        rating,
        profile: userData?.photoUrl,
      })
        .then((res) => {
          enqueueSnackbar("Review submitted!", {
            variant: "success",
          });
          setLoading(false);
          setReviewData({
            fullname: "",
            role: "",
            profile: "",
            desc: "",
          });
          setRating(0);
          navigate("/");
          reviewsListFetch();
        })
        .catch((err) => {
          enqueueSnackbar("Error!", {
            variant: "error",
          });
          setLoading(false);
        });
    } else {
      navigate("sign-in", { state: "write_your_review" });
    }
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
        goToHome,
        reviewData,
        rating,
        setReviewData,
        setRating,
        location,
        submitReview,
        reviewsList,
        reviewsListLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
