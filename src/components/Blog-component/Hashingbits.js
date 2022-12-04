import React from "react";
import "./hashingbits.css";

const Hashingbits = () => {
  return (
    <div className="hashingbit-container">
      <div className="hashingbit-intro">
        <div className="hashingbit-text">
          <div className="hashingbit-img-container">
            <img src="assets/images/Group 41717.svg" alt="hashing-bit-img" />
          </div>
          <div className="text-part-container">
            <div className="text-part">
              DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight
              to your Inbox.
            </div>
            <div className="text-part">
              Explore our weekly newsletter: HashingBits. Stay updated on
              everything we’re publishing. Stand a step ahead.
            </div>
            <div className="input-container">
              <input type="text" placeholder="youremail@gmail.com" />
            </div>
            <div className="text-part">
              ✔️ Your email has been successfully registered, headlines will be
              sent to you soon.
            </div>
          </div>
        </div>
        <div className="img-part">
          <div className="hashingbit-img-container-right">
            <img src="assets/images/Union 4.svg" alt="message-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hashingbits;
