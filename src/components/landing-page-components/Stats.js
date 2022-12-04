import React from "react";
import "./stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <div className="stat-amt">$12.8B</div>
        <div className="stat-amt-desc">Amount Lost To DeFi Hacks in 2021</div>
      </div>
      <div className="stat">
        <div className="stat-amt">600K</div>
        <div className="stat-amt-desc">
          Lines of Codes Secured by QuillAudits
        </div>
      </div>
      <div className="stat">
        <div className="stat-amt">$14.6B</div>
        <div className="stat-amt-desc">Amount Protected By QuillAudits</div>
      </div>
    </div>
  );
};

export default Stats;
