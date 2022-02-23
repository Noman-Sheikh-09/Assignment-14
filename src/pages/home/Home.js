import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
export default function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
      </div>
      <div className="container-fluid header-bg-img">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <p className="header-heading">Building things is our mission.</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3 featured-project">
            <h5 className="header-blue-heading">Featured project</h5>
            <p className="header-blue-para">
              The National University of Architecture
            </p>
            <div className="header-icons">
              <input type="back" value="Back" className="back-icon" />
              <input type="next" value="Next" className="next-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h3 className="heading-reput">Our Reputation</h3>
        </div>
        <div className="row cards-row">
          <div className="col-md-4 one">
            <Card />
          </div>
          <div className="col-md-4 two">
            <Card />
          </div>
          <div className="col-md-4 three">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
