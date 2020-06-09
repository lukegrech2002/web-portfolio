import React, { Component } from "react";
import "../Portfolio.css";

class PortfolioCard extends Component {
  constructor() {
    super();
    this.state = {};
}

  render() {
    return (
      <React.Fragment>
        <div className="portfolio-card">
          <div className="portfolio-card-image"><img src={this.props.imgUrl}/></div>
          <div className="portfolio-card-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="portfolio-card-description">
            <h3>Description</h3>
            <p>{this.props.description}</p>
          </div>
          <div className="portfolio-card-technologies">
          <h3>Technologies</h3>
            <p>{this.props.technologies}</p>
          </div>
          <div className="portfolio-card-buttons">
            <form action={this.props.youtubeVideo}>
              <input
                type="submit"
                className="portfolio-card-button-demo"
                value="View Demonstration"
              ></input>
            </form>
            <form action={this.props.githubRepo}>
              <input
                type="submit"
                className="portfolio-card-button-nav"
                value="View GitHub Repository"
              ></input>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioCard;
