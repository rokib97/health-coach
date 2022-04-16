import React from "react";
import useData from "../../../Hook/useData";
import SingleRequirement from "../SingleRequirement/SingleRequirement";

const CoachRequirements = () => {
  const [requirements] = useData();
  return (
    <div className="container mt-5">
      <h1 className="text-center my-5">Why people need a Health Coach</h1>
      <div className="row g-4">
        {requirements &&
          requirements.map((requirement) => (
            <SingleRequirement
              key={requirement.id}
              requirement={requirement}
            ></SingleRequirement>
          ))}
      </div>
    </div>
  );
};

export default CoachRequirements;
