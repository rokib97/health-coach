import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service || {};
  return (
    <div className="col-lg-4 col-md-6 col-12 text-decoration-none text-black">
      <div className="text-center p-4 mt-3 single-container h-100">
        <img className="w-75 mx-auto rounded-3" src={img} alt="" />
        <h4 className="mt-3">{name}</h4>
        <p className="opacity-75">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <h6 className="fw-bold">Price: ${price}</h6>
        <button className="btn  btn-outline-success service-btn-color  rounded-pill">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Service;
