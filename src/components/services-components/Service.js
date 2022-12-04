import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="left-service-container">
        <div className="service-audit-img-container">
          <img src="assets/images/search-1.svg" alt="audit-img" />
        </div>
      </div>
      <div className="right-service-container">
        <div className="title-small">SERVICE</div>
        <div className="title-large">Smart Contract Auditing</div>
        <div className="service-desc-container">
          <p className="service-desc">
            Our Audit Process for smart contract is based on the comprehensive
            approach we follow to investigate the code for security flaws and
            potential vulnerabilities.
          </p>
          <p className="service-desc">Ethereum</p>
          <p className="service-desc">Polygon</p>
          <p className="service-desc">BSC</p>
          <p className="service-desc">Solana</p>
          <p className="service-desc">EOS</p>
        </div>
        <div className="service-btn-container">
          <button className="primary-btn">Explore</button>
        </div>
      </div>

      <div className="left-testing-container">
        <div className="title-small">SERVICE</div>
        <div className="title-large">Blockchain Penetration Testing</div>
        <div className="service-desc-container">
          <p className="service-desc">
            QuillAudits proven strategy to tackle vulnerabilities specific to
            blockchain technology comes with a mix-blend of conventional
            pentesting approach and dynamic blockchain analysis.
          </p>
        </div>
        <div className="service-btn-container">
          <button className="primary-btn">Explore</button>
        </div>
      </div>
      <div className="right-testing-container">
        <div className="blockchain-img-container">
          <img src="assets/images/search-2.svg" alt="blockchain-img" />
        </div>
      </div>

      <div className="left-testing-container">
        <div className="due-dilligence-img-container">
          <img src="assets/images/search-3.svg" alt="due-dilligence-img" />
        </div>
      </div>
      <div className="right-service-container">
        <div className="title-small">SERVICE</div>
        <div className="title-large">Due Diligence</div>
        <div className="service-desc-container">
          <p className="service-desc">
            QuillAudits acknowledges the significant threats involved in smart
            contracts, which can lead to many critical possibilities.
          </p>
          <p className="service-desc">DeFi Due Diligence</p>
          <p className="service-desc">NFT Due Diligence</p>
          <p className="service-desc">Rug Pull Due Diligence</p>
        </div>
        <div className="service-btn-container">
          <button className="primary-btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
