import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github.png";
import google from "../../../Images/google.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  let errorElement;
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (googleError) {
    errorElement = (
      <p className="text-danger text-center mt-2">
        Error:{" "}
        {googleError?.message.includes("popup-closed-by-user")
          ? "Popup Closed by user!"
          : ""}
      </p>
    );
  }
  useEffect(() => {
    if (googleUser) {
      toast("Logged in Successfully!");
      navigate("/");
    }
  }, [googleUser, navigate]);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (googleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {errorElement}
      <h6 className="text-center my-3">Or Sign in with</h6>
      <div className="d-flex align-items-center justify-content-center">
        <img
          onClick={handleGoogleSignIn}
          className="mx-2"
          width={40}
          src={google}
          alt=""
        />
        <img width={40} src={github} alt="" />
        <img className="mx-2" width={40} src={facebook} alt="" />
      </div>
    </div>
  );
};

export default SocialLogin;
