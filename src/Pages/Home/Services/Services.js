import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="container mt-5">
      <h1 className="text-center">Do not wait for Tomorrow!</h1>
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
