import React from "react";
import "./AdsBanner.css";
export default function AdsBanner() {
  return (
    <div>
      <div className="container-fluid banner-bg">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <h4 className="banner-title">
              Free consultation with exceptional quality
            </h4>
            <p className="banner-subtitle">Just one call away: +84 1102 2703</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
              <button className="btn-2">Get Your Consultation</button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}
