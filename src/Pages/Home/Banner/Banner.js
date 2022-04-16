import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../Images/slider-1.jpg";
import slider2 from "../../../Images/slider-2.png";
import "./Banner.css";
// import background from '../../../Images/background.jpg'
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Hi, I’m Ashley Graff!</h1>
            <p>Your new Personal Coach for better life!</p>
            <button className="btn btn-lg btn-outline-light rounded-pill fw-bold text-color">
              About me
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-two"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="title">Hi, I’m Ashley Graff!</h1>
            <p>Your new Personal Coach for better life!</p>
            <button className="btn btn-lg btn-outline-light rounded-pill fw-bold text-color">
              Contact with me
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
