import React from "react";
import Clients from "./clients";
import Security from "./Security";
import Service from "./Service";

const Services = () => {
  return (
    <div className="services">
      <Clients />
      <Service />
      <Security />
    </div>
  );
};

export default Services;
