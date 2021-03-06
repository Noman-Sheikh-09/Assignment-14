import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import ButtonOne from "../../components/button/buttonOne/ButtonOne";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import BlueCard from "../../components/blueCard/BlueCard";
import AdsBanner from "../../components/adsBanner/AdsBanner";
import ProjectCard from "../../components/projectCard/ProjectCard";
import BlackButton from "../../components/button/blackButton/BlackButton";
import Experience from "../../components/experience/Experience";
import SubmitButton from "../../components/button/submitButton/SubmitButton";
import BlueFooter from "../../components/blueFooter/BlueFooter";
import Footer from "../../components/footer/Footer";

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
            {/* <div className="header-icons">
              <button className="back-icon"></button>
              <button className="next-icon"> </button>
            </div> */}
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
      {/* Blue Frame */}
      <div className="container bottom-bg-part2 ">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5 ">
            <div className="blue-bg-part2">
              <h6 className="blue-title-part2">About Us</h6>
              <p className="blue-subtitle-part2">
                For more than 30 years we have been delivering world-class
                construction and we've built many lasting relationships along
                the way.
                <br />
                <br />
                we've matured into an industry leader and trusted resource for
                those seeking quality, innovation and reliability when building
                in the U.S.
              </p>
              <ButtonOne />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid Services-section">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <h5 className="services-heading">Services</h5>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="container ser-card">
          <div className="row ">
            <div className="col-md-4 card-one">
              <ServiceCard />
            </div>
            <div className="col-md-4 card-two">
              <BlueCard />
            </div>
            <div className="col-md-4 card-three">
              <ServiceCard />
            </div>
          </div>
        </div>
        <div className="container ser-card">
          <div className="row ">
            <div className="col-md-4 card-four">
              <BlueCard />
            </div>
            <div className="col-md-4 card-five">
              <ServiceCard />
            </div>
            <div className="col-md-4 card-six">
              <BlueCard />
            </div>
          </div>
        </div>
      </div>
      {/*=Experiecne Cards part  */}

      <Experience />

      {/* Experiecne Cards part  */}
      <AdsBanner />
      {/* Projects Area  */}
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h5 className="project-heading">Projects</h5>
            <h4 className="project-subheading">I All</h4>
            <ul>
              <li className="project-name">Commercial</li>
              <li className="project-name">Residential</li>
              <li className="project-name">Other</li>
            </ul>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 black-card-row">
            <ProjectCard />
            <ProjectCard />
            <br />
            <div className="align-black-btn">
              <BlackButton />
            </div>
          </div>
          <div className="col-md-4 black-card-row">
            <ProjectCard />
            <ProjectCard />
            <br />
            <div className="align-black-btn">
              <BlackButton />
            </div>
          </div>
        </div>
      </div>
      {/* Projects Area  */}
      {/* Contact Form  */}
      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h2 className="contact-heading">What can us do for you?</h2>
            <p className="contact-sub-heading">
              We are ready to work on a project of any complexity, whether it???s
              commercial or residential.
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row data-row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <input type="Name" placeholder="Your Name*" className="name" />
            <input type="Reason" placeholder="Reasons*" className="reason" />
            <input type="massage" placeholder="Massage" className="msg" />
            <p className="contact-note">* indicates a required field</p>
          </div>
          <div className="col-md-3">
            <input type="Email" placeholder="Email*" className="email" />
            <input type="phone" placeholder="Phone*" className="phone" />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2 submit-button">
            <SubmitButton />
          </div>
          <div className="col-md-5"></div>
        </div>
        <Footer />
        <BlueFooter />
      </div>
      {/* Contact Form  */}
      {/* Last Blue Footer  */}
    </div>
  );
}
