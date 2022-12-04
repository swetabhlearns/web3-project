import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="company-details">
          <div className="parent-company">
            <div className="quillhash-branding">Parent Company</div>
            <div className="branding-img-container">
              <img
                src="assets/images/Final Vertical White 2.svg"
                alt="footer-logo"
              />
            </div>
            <div className="branding-text">
              Quillhash delivers enterprise grade blockchain technology to
              leading companies worldwide.
            </div>
          </div>
          <div className="explore-container">
            <div className="quillhash-branding">Explore</div>

            <ul>
              <li>Careers</li>
              <li>Courses</li>
              <li>Blockchain Security CTF</li>
              <li>QuillAudits Partner Program</li>
              <li>Referral Program</li>
            </ul>
          </div>
          <div className="services-container">
            <div className="quillhash-branding">Services</div>

            <ul>
              <li>Smart Contract Auditing</li>
              <li>Blockchain Pen Testing</li>
              <li>Due Diligence</li>
            </ul>
          </div>
          <div className="contact-us-container">
            <div className="quillhash-branding">Contact Us</div>
            <div className="contact-us-text">
              LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur
              DLF Phase1, Sector 28, Gurugram, Haryana - 122002
            </div>

            <p className="email">
              <em>📧contact@quillaudits.com</em>
            </p>
          </div>
        </div>
        <div className="journey-container">
          <div className="join-journey">
            <div className="quillhash-branding">Join our Journey</div>
            <div className="social-logos-container">
              <div className="social-logo">
                <img src="assets/images/Group 5.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 10.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 13.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 18.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 28.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 41763.png" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 41764.png" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 41765.svg" alt="social-media" />
              </div>
              <div className="social-logo">
                <img src="assets/images/Group 18.svg" alt="social-media" />
              </div>
            </div>
          </div>
        </div>
        <div className="trade-mark">
          {" "}
          All Rights Reserved. © Copyright 2022. QuillHash Technologies Private
          Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
