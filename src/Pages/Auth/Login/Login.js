import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  console.log(passwordError);
  useEffect(() => {
    if (user) {
      toast("Logged in Successfully!");
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email,Please Reset Password");
    } else {
      toast("Please Enter Email");
    }
  };
  return (
    <div data-aos="fade-down-right" className="container my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="w-100 form-details p-4">
            <h1 className="my-4 title">WELCOME BACK</h1>
            <Form onSubmit={handleSumbit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  className=""
                  ref={emailRef}
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  required
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <p className="text-danger">
                {error?.message.includes("wrong-password")
                  ? "Wrong Password"
                  : ""}
              </p>
              <p className="text-danger">
                {error?.message.includes("user-not-found")
                  ? "User not found!"
                  : ""}
              </p>
              <p className="text-danger">{passwordError?.message}</p>
              <h6 className="my-3">
                Forget Password?
                <span>
                  <Link
                    onClick={resetPassword}
                    to="/login"
                    className="text-color"
                  >
                    Reset Password
                  </Link>
                </span>
              </h6>
              <h6 className="my-3">
                Don't have a account?
                <span>
                  <Link to="/register" className="text-color">
                    Register
                  </Link>
                </span>
              </h6>

              <button className="btn w-100 auth-btn-color text-white fw-bold rounded-pill">
                Login
              </button>
            </Form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
