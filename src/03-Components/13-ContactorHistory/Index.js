import React, { Component } from "react";
import Hist from "./contractor-history";
import HistCont from "./contractor-history-cont";
const API = "./resumeData.json";

class ContractorHistory extends Component {
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
      <>
        <section className="contractor-history">
          <Hist data={this.state.resumeData.professionalExperience} />
        </section>
        <section className="contractor-history-cont">
          <HistCont data={this.state.resumeData.professionalExperienceCont} />
        </section>
      </>
    );
  }
}

export default ContractorHistory;
