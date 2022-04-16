import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service || {};
  return (
    <div className="col-lg-4 col-md-6 col-12 text-decoration-none text-black">
      <div className="text-center p-4 py-5 single-container h-100">
        <img className="w-75 mx-auto rounded-3" src={img} alt="" />
        <h4 className="mt-3">{name}</h4>
        <p className="opacity-75">
          {description.length > 150
            ? description.slice(0, 120) + "..."
            : description}
        </p>
        <h6 className="fw-bold">${price}</h6>
      </div>
    </div>
  );
};

export default Service;
