import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact-div">
        <div className="contact-title-div">
          <a class="contact-title-underline">Contact Me</a>
        </div>
        <div className="contact-methods">
          <p>
            <i class="fas fa-envelope"></i> lukegrech2002@gmail.com
          </p>
          <p>
            <i class="fas fa-globe-europe"></i> www.lukegrech.com
          </p>
          <p>
            <i class="fas fa-phone"></i> 79392877
          </p>
          <p>
            <i class="fab fa-linkedin"></i> Luke Grech
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Gzira, Malta
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
