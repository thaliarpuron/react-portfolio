import React from "react";

const Contact = () => (
  <div className="">
    <div className="container container-about">
      <h2 className="about-portfolio-contact">Contact</h2>
      <hr />
      <div className="card-body card">
        <div className="card text-center">
          <div className="card-header">
          </div>
          <div className="card-body">
            <ul>
              <li className="card-text">Thalia Rodriguez</li>
              <li className="card-text">Email: thaliarpuron@gmail.com</li>
              <li className="card-text">Phone number: 786-314-1712</li>
            </ul>
            <a href="https://github.com/thaliarpuron" target="_blank" className="btn btn-dark btn-contact">GitHub</a>
            <a href="#" target="_blank" className="btn btn-primary btn-contact">LinkedIn</a>
            <a href="#" target="_blank" className="btn btn-danger btn-contact">Resume</a>
          </div>

          <div className="card-footer text-muted">
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Contact;
