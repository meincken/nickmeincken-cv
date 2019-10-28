import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./../../04-Sections/00-Header/Index";
import PersonalInformation from "./../../04-Sections/01-PersonalInformation/Index";
import ProfessionalSkills from "./../../04-Sections/02-ProfessionalSkills/Index";
import ContractorHistory from "./../../04-Sections/03-ContactorHistory/Index";
import Extras from "./../../04-Sections/04-Extras/Index";
import styled from "styled-components";

// import "./../../css/resume.css";

const API = "./resumeData.json";

const Container = styled.div`
  background-color: #1e1e1e;
  color: #e1e1e1;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 200;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;

  .section {
    display: flex;
    flex-wrap: row wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: content-box;
  }

  .twelve,
  .six {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .twelve {
    width: 100%;
  }

  .six {
    max-width: 100%;

    @media (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  a {
    color: #a9cc17;
  }
`;
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
      <Container>
        <p className="hidden-print-block text-center">
          <button className="print" onClick={() => window.print()}>
            PRINT
          </button>
          <Link className="btn" to="/">
            Home
          </Link>
        </p>
        <Title data={this.state.resumeData} />
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
      </Container>
    );
  }
}

export default Template;
