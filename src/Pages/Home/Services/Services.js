import React from "react";
import useData from "../../../Hook/useData";
import Service from "../Service/Service";

const Services = () => {
  const [, services] = useData();
  return (
    <div className="container mt-5">
      <h1 className="text-center">Do not wait for Tomorrow!</h1>
      <h1 className="text-center">Services</h1>
      <div className="row g-4">
        {services &&
          services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
      </div>
    </div>
  );
};

export default Services;
