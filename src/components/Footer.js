import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* Footer icons */}
      <div className="footer-linkedin">
        <a
          href="https://www.linkedin.com/in/luke-grech-03ab14194/"
          className="fa fa-linkedin"
        ></a>
      </div>
      <div className="footer-github">
        <a href="https://github.com/lukegrech2002" className="fa fa-github"></a>
      </div>
      <div className="footer-youtube">
        <a
          href="https://www.youtube.com/channel/UC7f1Bn7IRpBcNhMvBLI2WTw?view_as=subscriber"
          className="fa fa-youtube"
        ></a>
      </div>
      <div className="footer-bottom">
        <h4>Luke Grech (2020)</h4>
      </div>
    </div>
  );
}

export default Footer;
