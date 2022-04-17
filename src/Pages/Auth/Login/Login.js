import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github.png";
import google from "../../../Images/google.png";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    <Loading></Loading>;
  }
  useEffect(() => {
    if (user) {
      toast("Logged in Successfully!");
      navigate("/");
    }
  }, [user, navigate]);

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
      toast("Sent email");
    } else {
      toast("Please Enter Email");
    }
  };
  return (
    <div className="container my-5">
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
              <h6 className="text-center my-3">Or Sign in with</h6>
              <div className="d-flex align-items-center justify-content-center">
                <img className="mx-2" width={40} src={google} alt="" />
                <img width={40} src={github} alt="" />
                <img className="mx-2" width={40} src={facebook} alt="" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
