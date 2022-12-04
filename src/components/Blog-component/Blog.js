import React from "react";
import "./blog.css";
import Hashingbits from "./Hashingbits";
import Invitation from "./invitation";

const Blog = () => {
  return (
    <>
      <div className="blog-container-main">
        <div className="blogs-container">
          <div className="title-small">OUR BLOG</div>
          <div className="blog-header-sub-container">
            <div className="title-large">Catch up on the news</div>
            <button className="primary-btn">Read More</button>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-img-container">
            <img src="assets/images/Mask.png" alt="blog-img" />
          </div>
          <div className="blog-title">
            Web3 Security: Classification & Analysis of Web3 Hacks
          </div>
          <div className="client-detail">
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-img-container">
            <img src="assets/images/Mask.png" alt="blog-img" />
          </div>
          <div className="blog-title">
            Web3 Security: Classification & Analysis of Web3 Hacks
          </div>
          <div className="client-detail">
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-img-container">
            <img src="assets/images/Mask.png" alt="blog-img" />
          </div>
          <div className="blog-title">
            Web3 Security: Classification & Analysis of Web3 Hacks
          </div>
          <div className="client-detail">
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>
        </div>
      </div>
      <Hashingbits />
      <Invitation />
    </>
  );
};

export default Blog;
