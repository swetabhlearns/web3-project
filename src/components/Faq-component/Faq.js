import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-info">
        <div className="title-small">FAQ</div>
        <div className="title-large">Frequently Asked Questions</div>
        <div className="service-desc-container">
          <p className="service-desc">
            QuillAudits acknowledges the significant threats involved in smart
            contracts, which can lead to many critical possibilities.
          </p>
        </div>
        <button className="primary-btn">Contact Us</button>
      </div>
      <div className="faq-questions">
        <div className="faq-question-active">
          <div className="faq-question-header">
            <div className="faq-question">What is smart contract security?</div>
            <div className="faq-button">🔼</div>
          </div>
          <div className="faq-answer">
            Smart Contract Security is a set of best practices to identify bugs
            & vulnerabilities in the code that can lead to security breaches.
            These loopholes have lead to huge financial losses recently.
          </div>
        </div>
        <div className="faq-question-not-active">
          <div className="faq-question">What is smart contract security?</div>
          <div className="faq-button">🔽</div>
        </div>
        <div className="faq-question-not-active">
          <div className="faq-question">What is smart contract security?</div>
          <div className="faq-button">🔽</div>
        </div>
        <div className="faq-question-not-active">
          <div className="faq-question">What is smart contract security?</div>
          <div className="faq-button">🔽</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
