import React from "react";
import "./portfolio.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="title-small">PORTFOLIO</div>
        <div className="title-large">Latest Work</div>
        <div className="portfolio-btn-container">
          <button className="portfolio-btn active">Ethereum</button>
          <button className="portfolio-btn">Binance SC</button>
          <button className="portfolio-btn">NFT</button>
          <button className="portfolio-btn">Solana</button>
        </div>
      </div>
      <div className="portfolio-carousel">
        <div className="carousel-btn-arrow">
          <FcPrevious />{" "}
        </div>
        <div className="carousel-object">
          <div className="carousel-img-container">
            <img src="assets/images/carousel-img.png" alt="carousel-img" />
          </div>{" "}
          <p className="carousel-img-title">StackOS Audit Report</p>
          <div className="carousel-btn">
            <button className="secondary-btn">View</button>
            <button className="secondary-btn">Download</button>
          </div>
        </div>
        <div className="carousel-object">
          <div className="carousel-img-container">
            <img src="assets/images/carousel-img.png" alt="carousel-img" />
          </div>
          <p className="carousel-img-title">StackOS Audit Report</p>
          <div className="carousel-btn">
            <button className="secondary-btn">View</button>
            <button className="secondary-btn">Download</button>
          </div>
        </div>
        <div className="carousel-object">
          <div className="carousel-img-container">
            <img src="assets/images/carousel-img.png" alt="carousel-img" />
          </div>{" "}
          <p className="carousel-img-title">StackOS Audit Report</p>
          <div className="carousel-btn">
            <div className="btn-container-flex">
              <button className="secondary-btn">View</button>
            </div>
            <button className="secondary-btn">Download</button>
          </div>
        </div>

        <div className="carousel-btn-arrow">
          <FcNext />
        </div>
      </div>
      <div className="portfolio-last-btn">
        <button className="secondary-btn"> BUTTON</button>
      </div>
    </div>
  );
};

export default Portfolio;
