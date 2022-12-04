import React from "react";
import "./mention.css";
import Testimonial from "./Testimonial";

const Mention = () => {
  return (
    <div className="mention-container">
      <div className="mention-header">
        <div className="title-small">MENTIONS</div>
        <div className="title-large">As Featured In</div>
      </div>
      <div className="brand-featured">
        <div className="brand">
          <div className="brand-img">
            <img
              className="brand-img"
              src="assets/images/ctofficial-1280x720.png"
              alt="brand"
            />
          </div>

          <p className="brand-read-more">Read More</p>
        </div>
        <div className="brand">
          <div className="brand-img">
            <img src="assets/images/2560px-Product_Hunt_Logo.svg" alt="brand" />
          </div>
          <p className="brand-read-more">Read More</p>
        </div>
        <div className="brand">
          <div className="brand-img">
            <img
              className="brand-img"
              src="assets/images/Mask-3.png"
              alt="brand"
            />
          </div>
          <p className="brand-read-more">Read More</p>
        </div>
        <div className="brand">
          <div className="brand-img">
            <img src="assets/images/Coincrunch_logo_640_416.png" alt="brand" />
          </div>
          <p className="brand-read-more">Read More</p>
        </div>
        <div className="brand">
          <div className="brand-img">
            <img src="assets/images/hn-logo.png" alt="brand" />
          </div>
          <p className="brand-read-more">Read More</p>
        </div>
        <div className="brand">
          <div className="brand-img">
            <img
              src="assets/images/Invest-in-Blockchain-web-logo-copy-4.png"
              alt="brand"
            />
          </div>
          <p className="brand-read-more">Read More</p>
        </div>
        {/* <div className="testimonials-container">
          <div className="title-small">TESTIMONIALS</div>
          <div className="testional-header-sub-container">
            <div className="title-large">What our Clients are saying</div>
            <button className="primary-btn">Read More</button>
          </div>
        </div>
        <div className="client-testimonials">
          <div className="stack-os-text">
            Stack <strong>OS</strong>
          </div>
          <div className="client-review">
            {" "}
            Very professional and timed delivery. Also very prompt in responses
            and queries.
          </div>
          <div className="client-detail">
            <p>
              {" "}
              <strong>Vishnu Korde</strong>{" "}
            </p>
            <p>CEO, StackOS</p>
          </div>
        </div>
        <div className="client-testimonials">
          <div className="stack-os-text">
            Stack <strong>OS</strong>
          </div>
          <div className="client-review">
            {" "}
            Very professional and timed delivery. Also very prompt in responses
            and queries.
          </div>
          <div className="client-detail">
            <p>
              {" "}
              <strong>Vishnu Korde</strong>{" "}
            </p>
            <p>CEO, StackOS</p>
          </div>
        </div>
        <div className="client-testimonials">
          <div className="stack-os-text">
            Stack <strong>OS</strong>
          </div>
          <div className="client-review">
            {" "}
            Very professional and timed delivery. Also very prompt in responses
            and queries.
          </div>
          <div className="client-detail">
            <p>
              {" "}
              <strong>Vishnu Korde</strong>{" "}
            </p>
            <p>CEO, StackOS</p>
          </div> */}
        {/* </div> */}
      </div>
      <Testimonial />
    </div>
  );
};

export default Mention;
