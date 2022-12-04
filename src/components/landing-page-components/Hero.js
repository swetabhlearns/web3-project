import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-text">
          Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence
          Services
        </div>
        <div className="small-text">QuillAudits, Making web3 a safer place</div>
        <div className="hero-button">
          <button className="primary-btn">Request Free Quote</button>
          <button className="secondary-btn">Explore Services</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img"></div>
      </div>
    </div>
  );
};

export default Hero;
