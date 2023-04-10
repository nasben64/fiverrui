import React from "react";
import "./BannerDark.scss";

const BannerDark = () => {
  return (
    <div className="features dark">
      <div className="container">
        <div className="item">
          <h1>fiverr business.</h1>
          <h1>A business solution designed for teams</h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="item">
          <img src="./img/women.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerDark;
