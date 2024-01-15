import React from "react";
import "../Styles/ContactMe.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function ContactMe() {
  return (
    <div id="contact" className="contact-info-container">
      <div>
        <p className="header-text">Get in Touch</p>
        <h2>Contact Me</h2>
      </div>
      <address className="contact-details-wrapper">
        <div className="contact-wrapper">
          <MdEmail className="contact-icon" />
          <p>
            <a href="mailto:sebastiantorkowski@gmail.com">
              sebastiantorkowski@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-wrapper">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/sebastian-torkowski-6557842a3/"
            target="_blank"
          >
            <p>LinkedIn</p>
          </a>
        </div>
      </address>
    </div>
  );
}

export default ContactMe;
