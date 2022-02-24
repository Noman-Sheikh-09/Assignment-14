import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <p className="addres">
              <span className="blue-text">Address:</span>: 6391 Elgin St.
              Celina, Delaware 10299
            </p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
