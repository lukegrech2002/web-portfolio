import React, { Component } from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*Scrolls to top of page on page change */
import ScrollToTop from "react-router-scroll-top";
import Modal from "react-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
    };
  }

  // This function removes the error message from the console
  componentWillMount() {
    Modal.setAppElement("body");
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen, //Equal to opposite when clicked (true/false)
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: "100%" }} className="App">
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <Switch>
            {/*Scrolls to top of page on page change */}
            <ScrollToTop>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/contact" component={Contact} />
            </ScrollToTop>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
