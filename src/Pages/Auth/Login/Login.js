import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebook from "../../../Images/facebook.png";
import github from "../../../Images/github.png";
import google from "../../../Images/google.png";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="w-75 mx-auto form-details p-4">
            <h1 className="my-4">WELCOME BACK</h1>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  className=""
                  required
                  type="email"
                  placeholder="Email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>

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
