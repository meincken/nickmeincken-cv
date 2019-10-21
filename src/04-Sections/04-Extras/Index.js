import React, { Component } from "react";
import SoftSkills from "./softskills";
import Personal from "./personal";
import Additional from "./additional";
import Sites from "./sites";

const API = "./cvData.json";

class Extra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

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
      <section className="section misc">
        <div className="six">
          <SoftSkills data={this.state.resumeData.softskills} />
          <Personal data={this.state.resumeData.personal} />
        </div>
        <div className="six">
          <Additional data={this.state.resumeData.additional} />
          <Sites data={this.state.resumeData.sites} />
        </div>
      </section>
    );
  }
}

export default Extra;
