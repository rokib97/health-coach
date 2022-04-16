import React from "react";
import Banner from "../Banner/Banner";
import CoachRequirements from "../CoachRequirements/CoachRequirements";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CoachRequirements></CoachRequirements>
      <Services></Services>
    </div>
  );
};

export default Home;
