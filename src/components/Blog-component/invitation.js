import React from "react";
import "./invitation.css";
const Invitation = () => {
  return (
    <div className="background-container">
      <div className="invitation-container">
        <div className="invitation-text-container">
          <div className="title-large">
            Join Hands With us to secure Web3 Together
          </div>
          <div className="invitation-small-text">
            Help us in our journey to secure web3 by joining our team of
            talented individuals spread across the globe.
          </div>
          <div className="invitation-btn">
            <button className="primary-btn">APPLY NOW!</button>
          </div>
        </div>
        <div className="invitation-img-container">
          <img src="assets/images/employee.svg" alt="employee.svg" />
        </div>
      </div>
    </div>
  );
};

export default Invitation;
