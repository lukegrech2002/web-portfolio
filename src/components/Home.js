import React, { Component } from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-div1">
          <div className="profile">
            <img src={require("../assets/images/avatar.png")}></img>
            <h1>Luke Grech</h1>
          </div>
          <h2 class="line-1 anim-typewriter">Front End Developer & Student</h2>
        </div>
        <div className="home-accounts">
          <div className="home-accounts-linkedin">
            <a
              href="https://www.linkedin.com/in/luke-grech-03ab14194/"
              className="fa fa-linkedin"
            ></a>
            <form action="https://www.linkedin.com/in/luke-grech-03ab14194/">
              <input
                type="submit"
                className="navigate-page-button"
                value="View LinkedIn Profile"
              ></input>
            </form>
          </div>
          <div className="home-accounts-github">
            <a
              href="https://github.com/lukegrech2002"
              className="fa fa-github"
            ></a>
            <form action="https://github.com/lukegrech2002">
              <input
                type="submit"
                className="navigate-page-button"
                value="View GitHub Profile"
              ></input>
            </form>
          </div>
          <div className="home-accounts-youtube">
            <a
              href="https://www.youtube.com/channel/UC7f1Bn7IRpBcNhMvBLI2WTw?view_as=subscriber"
              className="fa fa-youtube"
            ></a>
            <form action="https://www.youtube.com/channel/UC7f1Bn7IRpBcNhMvBLI2WTw?view_as=subscriber">
              <input
                type="submit"
                className="navigate-page-button"
                value="View YouTube Profile"
              ></input>
            </form>
          </div>
        </div>
        <div className="home-div3">
          <Link to="/about">
            <button className="navigate-page-button">
              <a>About Me</a>
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="navigate-page-button">
              <a>View Portfolio</a>
            </button>
          </Link>
          <Link to="/contact">
            <button className="navigate-page-button">
              <a>Contact Me</a>
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
