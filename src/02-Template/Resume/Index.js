import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./../../04-Sections/00-Header/Index";
import PersonalInformation from "./../../04-Sections/01-PersonalInformation/Index";
import ProfessionalSkills from "./../../04-Sections/02-ProfessionalSkills/Index";
import ContractorHistory from "./../../04-Sections/03-ContactorHistory/Index";
import Extras from "./../../04-Sections/04-Extras/Index";

import "./../../css/resume.css";

const API = "./cvData.json";

class Template extends Component {
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
      <div className="container">
        <p className="hidden-print-block text-center">
          <button className="print" onClick={() => window.print()}>
            PRINT
          </button>
          <Link className="btn" to="/">
            Home
          </Link>
        </p>
        <header>
          <Title data={this.state.resumeData} />
        </header>
        <main>
          <PersonalInformation
            data={this.state.resumeData.PersonalInformation}
          />
          <ProfessionalSkills data={this.state.resumeData.professionalSkills} />
          <ContractorHistory />
          <Extras data={this.state.resumeData.softskills} />
        </main>
        <footer className="text-center hidden-print-block">
          <p>References available upon request</p>
          <p>©2012-2019 Nick Meincken</p>
        </footer>
      </div>
    );
  }
}

export default Template;
