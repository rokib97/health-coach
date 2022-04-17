import React from "react";
import useData from "../../../Hook/useData";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [, services] = useData();
  return (
    <div className="container my-5">
      <h1 className="text-center title display-6">Do not wait for Tomorrow!</h1>
      <h1 className="text-center title services-title mx-auto mb-4">
        Services
      </h1>
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
