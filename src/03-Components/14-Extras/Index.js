import React, { Component } from "react";
import Personal from "./personal";
import Sites from "./sites";

const API = "./resumeData.json";

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
      <section className="misc">
        <div className="six">
          <Personal data={this.state.resumeData.personal} />
        </div>
        <div className="six">
          <Sites data={this.state.resumeData.sites} />
        </div>
      </section>
    );
  }
}

export default Extra;
