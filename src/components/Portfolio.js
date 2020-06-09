import React, { useState, Component } from "react";
import "./Portfolio.css";
import PortfolioCard from "./sub-components/PortfolioCard.js";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // Portfolio card object constructor
    function portfolioItem(
      imgUrl,
      title,
      description,
      technologies,
      githubRepo,
      youtubeVideo
    ) {
      this.imgUrl = imgUrl;
      this.title = title;
      this.description = description;
      this.technologies = technologies;
      this.githubRepo = githubRepo;
      this.youtubeVideo = youtubeVideo;
    }

    // Images to be sent as props
    const eCommerceWebImg = require("../assets/images/ecommerce.png");
    const instantMessagingAppImg = require("../assets/images/instant-message-app.png");
    const jsQuizImg = require("../assets/images/quiz.png");

    let eCommerceWeb = new portfolioItem(
      eCommerceWebImg,
      "E-Commerce Website",
      "This website works like other e-commerce websites, users can create accounts, order, edit their account and the employees may edit stocks, check orders and more in the CMS.",
      "HTML, CSS, Bootstrap, JavaScript, PHP, AJAX and MongoDB.",
      "https://github.com/lukegrech2002/E-commerce",
      "https://youtu.be/Awwij9VIcko"
    );

    let instantMessagingApp = new portfolioItem(
      instantMessagingAppImg,
      "Instant Messaging App",
      "A user can create an account/log in. Once logged in, the user will be marked as 'Online' and can start chatting in the group chat. Other online users will be visible. All data is stored and retreived in the SQL database.",
      "HTML, CSS, JavaScript, AJAX, JQuery, MySQL, WebSockets, Node.js and Express.",
      "https://github.com/lukegrech2002/Instant-messaging-app",
      "https://youtu.be/OdxSFSlexww"
    );

    let jsQuiz = new portfolioItem(
      jsQuizImg,
      "Quiz",
      "Users will have to log in/create an account before accessing the game. Once logged in, one of the three difficulties must be selected. The game will start, with a time limit. The scores and game details are stored at the end of the game and displayed in the leaderboards.",
      "HTML, CSS, JavaScript and PHP.",
      "https://github.com/lukegrech2002/JavaScript-Quiz",
      "https://youtu.be/nzkXzySBwf8"
    );
    return (
      <React.Fragment>
        <div className="portfolio-div">
          <div className="portfolio-title-div">
            <a class="portfolio-title-underline">Portfolio</a>
          </div>
          <PortfolioCard
            imgUrl={eCommerceWeb.imgUrl}
            title={eCommerceWeb.title}
            description={eCommerceWeb.description}
            technologies={eCommerceWeb.technologies}
            githubRepo={eCommerceWeb.githubRepo}
            youtubeVideo={eCommerceWeb.youtubeVideo}
          />
          <PortfolioCard
            imgUrl={instantMessagingApp.imgUrl}
            title={instantMessagingApp.title}
            description={instantMessagingApp.description}
            technologies={instantMessagingApp.technologies}
            githubRepo={instantMessagingApp.githubRepo}
            youtubeVideo={instantMessagingApp.youtubeVideo}
          />
          <PortfolioCard
            imgUrl={jsQuiz.imgUrl}
            title={jsQuiz.title}
            description={jsQuiz.description}
            technologies={jsQuiz.technologies}
            githubRepo={jsQuiz.githubRepo}
            youtubeVideo={jsQuiz.youtubeVideo}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
