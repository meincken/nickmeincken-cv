import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "../../../src/Shared/Global";

import Title from "./../../03-Components/10-Header/Index";
import PersonalInformation from "./../../03-Components/11-PersonalInformation/Index";
import ProfessionalSkills from "./../../03-Components/12-ProfessionalSkills/Index";
import ContractorHistory from "./../../03-Components/13-ContactorHistory/Index";
import Extras from "./../../03-Components/14-Extras/Index";

import styled from "styled-components";

const API = "./resumeData.json";

const Container = styled.div`
  background-color: #1e1e1e;
  color: #e1e1e1;
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
    flex-wrap: wrap;
  }

  strong {
    font-weight: 400;
  }

  h2,
  h3,
  h4 {
    font-weight: 200;
  }
  h2 {
    font-size: 28px;
    border-bottom: 1px solid #fff;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  p {
    margin: 0 0 10px;
  }

  .twelve,
  .six {
    position: relative;

    ul {
      margin: 0 0 10px 10px;
      padding: 0;
    }

    li {
      margin-left: 20px;

      strong {
        display: block;
      }
    }

    p span {
      display: block;
    }
  }

  .twelve {
    flex: 0 0 100%;

    ul {
      column-count: 2;
    }
  }

  .six {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex: 0 0 50%;
    }
  }

  a {
    color: #a9cc17;
  }

  dd {
    margin-left: 0;
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

const Header = styled.p`
  text-align: center;
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
        <GlobalStyle />
        <Helmet>
          <title>Nick Meincken | Curriculum Vitae</title>
          <meta name="description" content="Helmet application" />
          <body className="CV" />
        </Helmet>
        <Header className="hidden-print-block">
          <button className="print" onClick={() => window.print()}>
            PRINT
          </button>
          <Link className="btn" to="/">
            Home
          </Link>
        </Header>
        <Title data={this.state.resumeData} />
        <main>
          <PersonalInformation
            data={this.state.resumeData.PersonalInformation}
          />
          <ProfessionalSkills data={this.state.resumeData.professionalSkills} />
          <ContractorHistory />
          <Extras data={this.state.resumeData.softskills} />
        </main>
        <Footer className="hidden-print-block">
          <p>References available upon request</p>
          <p>©2012-2019 Nick Meincken</p>
        </Footer>
      </Container>
    );
  }
}

export default Template;
