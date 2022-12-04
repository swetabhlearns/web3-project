import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container-main">
      <div className="testimonials-container">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
