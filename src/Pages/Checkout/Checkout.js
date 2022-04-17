import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useData from "../../Hook/useData";

const Checkout = () => {
  const { checkoutId } = useParams();
  console.log(checkoutId);
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const [, services] = useData();
  console.log(services);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    console.log(name, email, address, phone);
    toast(`Thank You For booking Service ${checkoutId}`);
  };

  return (
    <div className="container my-5 ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="w-100 form-details p-4">
            <h1 className="mt-2 title ">Hello There,</h1>
            <h4 className="mb-3 title ">Register now to explore more</h4>
            <Form onSubmit={handleFormSubmit}>
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
                  ref={addressRef}
                  required
                  type="text"
                  placeholder="Address"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  required
                  ref={phoneRef}
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>
              <button className="btn w-100 auth-btn-color text-white fw-bold rounded-pill">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
