import React from "react";
import './Experience.css';
import ContactButton from '../../components/button/contactButton/ContactButton'
export default function Experience() {
  return (
    <div>
      <div className="container client-experience">
        <div className="row">
          <div className="col-md-4 notes-card">
            <h1 className="card123">123</h1>
            <p className="project-complete">Projects Completed</p>
            <div className="year-card">
<h1 className="30">30</h1>
<p className="years-business">Years in Business</p>
            </div>
          </div>
          <div className="col-md-4 troffy-card">
            <h1 className="card84">84</h1>
            <p className="happy-client">Happy Clients</p>
            <div className="award-card">
<h1 className="card37">37</h1>
<p className="awards-win">Awards Win</p>
            </div>
          </div>
          <div className="col-md-4 experience-content">
              <h1 className="exp-heading">30 Years Experience</h1>
<p className="exp-content">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
         <div><ContactButton /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
