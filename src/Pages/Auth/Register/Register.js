import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github.png";
import google from "../../../Images/google.png";
import Loading from "../../Shared/Loading/Loading";
import "./Register.css";

const Register = () => {
  const [passwordError, setPassswordError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  if (loading || updating) {
    <Loading></Loading>;
  }

  const handleFormInput = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setPassswordError("Password does not match");
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("User Created Successfully!");
    navigate("/");
  };
  return (
    <div className="container my-5 ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="w-100 form-details p-4">
            <h1 className="mt-2 title ">Hello There,</h1>
            <h4 className="mb-3 title ">Register now to explore more</h4>
            <Form onSubmit={handleFormInput}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={nameRef}
                  className=""
                  required
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  className=""
                  required
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={passwordRef}
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={confirmPasswordRef}
                  required
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <p className="text-danger">{passwordError}</p>
              <p className="text-danger">
                {error?.message.includes("email-already-in-use")
                  ? "Email Already in use"
                  : ""}
              </p>

              <p className="my-3">
                Already have a account?
                <span>
                  <Link to="/login" className="text-color">
                    Log in
                  </Link>
                </span>
              </p>
              <button className="btn w-100 auth-btn-color text-white fw-bold rounded-pill">
                Register
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

export default Register;
