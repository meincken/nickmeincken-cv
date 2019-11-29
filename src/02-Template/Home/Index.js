import React, { Component } from "react";
import ReactGA from "react-ga";
import { Waypoint } from "react-waypoint";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { GlobalStyle } from "../../../src/Shared/Global";

import Nav from "./../../01-Global/Header/Index";
import Hero from "./../../03-Components/01-Hero/Index";
import About from "./../../03-Components/02-About/Index";
import Resume from "./../../03-Components/03-Resume/Index";
import Portfolio from "./../../03-Components/04-Portfolio/Index";
import Footer from "./../../01-Global/Footer/Index";

library.add(fab);

const API = "./resumeData.json";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      resumeData: {}
    };

    ReactGA.initialize("UA-36438114-1");
    ReactGA.pageview(window.location.pathname);
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  getResumeData() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ resumeData: data }));
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <>
        <GlobalStyle />

        <Nav sticky={this.state.stickyNav} />
        <Hero data={this.state.resumeData.main} />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <main>
          <About data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio data={this.state.resumeData.portfolio} />
        </main>
        <Footer data={this.state.resumeData.main} />
      </>
    );
  }
}

export default Template;
