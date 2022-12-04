import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";

import "./landing-page.css";
import Stats from "./Stats";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <Hero />
      <Stats />
    </div>
  );
};

export default LandingPage;
