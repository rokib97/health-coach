import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, name, price, description, img } = service || {};
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="col-lg-4 col-md-6 col-12 text-decoration-none text-black mb-5"
    >
      <div className="text-center p-4 mt-3 single-container h-100">
        <img className="w-75 mx-auto rounded-3" src={img} alt="" />
        <h4 className="mt-3">{name}</h4>
        <p className="opacity-75">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <h6 className="fw-bold">Price: ${price}</h6>
        <button
          onClick={() => navigate(`/checkout/${id}`)}
          className="btn  btn-outline-success service-btn-color  rounded-pill"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Service;
