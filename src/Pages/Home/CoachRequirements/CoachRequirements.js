import React from "react";
import useData from "../../../Hook/useData";
import SingleRequirement from "../SingleRequirement/SingleRequirement";
import "./CoachRequirements.css";

const CoachRequirements = () => {
  const [requirements] = useData();
  return (
    <div className="container mt-5">
      <h1 className="text-center my-5 title display-6">
        Why people need a Health Coach
      </h1>
      <div className="row g-4">
        {requirements &&
          requirements.map((requirement) => (
            <SingleRequirement
              key={requirement.id}
              requirement={requirement}
            ></SingleRequirement>
          ))}
      </div>
      <p className="mt-5 text-center">
        I am delighted to be able to share with you the techniques <br></br> I
        have learnt over the years that have brought me much
        <span className="happiness-title"> happiness and success</span>.
      </p>
    </div>
  );
};

export default CoachRequirements;
