import React from "react";
import "./Footer.css";
import FooterLogo from '../../assets/footer.png'
export default function Footer() {
  return (
    <div>
      <div className="container footer">
        <div className="row">
          <div className="col-md-5">
            <p className="addres">
              <span className="blue-text">Address:</span> 6391 Elgin St. Celina,
              Delaware 10299
            </p>
            <p>
              {" "}
              <span className="blue-text">Phone:</span>
              +84 1102 2703
            </p>
            <p>
              <span className="blue-text">Email : </span>
              hello@thebox.com
            </p>
<img src={FooterLogo} alt="" className="footer-logo"/>
{/* <h2 className="footerlogo"><span>The</span>Box</h2> */}
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <p className="newsletter">Newsletter:</p>
            <input
              type="email"
              placeholder="Your Email Address"
              className="your-email"
            />
            <p className="blue-text">Social:</p>
            {/* Icon will be here */}
          </div>
          <div className="col-md-1">
            <button className="subBtn">Subscribe</button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}
