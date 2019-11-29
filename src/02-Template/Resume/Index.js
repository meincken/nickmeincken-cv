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
  color: #fff;
  display: grid;
  grid-template-columns:
    [viewport-start] minmax(1em, 1fr)
    [container-start] minmax(0, 960px) [container-end]
    minmax(1em, 1fr) [viewport-end];

  @media print {
    display: block;
  }

  .container {
    grid-column: container;

    @media print {
      display: block;
    }
  }

  ul {
    padding-left: 20px;
  }

  .section-title {
    border-bottom: 1px solid;
    margin-bottom: 20px;

    @media print {
      border-bottom: 1px solid #1e1e1e;
      margin-bottom: 10px;
    }
  }

  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    p {
      margin-top: 0;
      margin-bottom: 16px;

      @media print {
        margin-bottom: 10px;
      }
    }

    span,
    strong {
      display: block;
    }

    .twelve {
      flex: 0 0 100%;
      max-width: 100%;

      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        li {
          flex: 0 0 100%;
          max-width: 100%;

          @media (min-width: 768px) {
            flex: 0 0 47%;
            max-width: 47%;
          }

          @media print {
            flex: 0 0 47%;
            max-width: 47%;
          }
        }
      }
    }

    .six {
      flex: 0 0 100%;
      max-width: 100%;

      @media (min-width: 768px) {
        flex: 0 0 48%;
        max-width: 48%;
      }

      @media print {
        flex: 0 0 48%;
        max-width: 48%;
      }
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

const Header = styled.div`
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
        <Header className="container hidden-print-block">
          <button className="print" onClick={() => window.print()}>
            PRINT
          </button>
          <br />
          <Link className="btn" to="/">
            Home
          </Link>
        </Header>
        <Title data={this.state.resumeData} />
        <main className="container">
          <PersonalInformation
            data={this.state.resumeData.PersonalInformation}
          />
          <ProfessionalSkills data={this.state.resumeData.professionalSkills} />
          <ContractorHistory />
          <Extras data={this.state.resumeData.softskills} />
        </main>
        <Footer className="container hidden-print-block">
          <p>References available upon request</p>
          <p>©2012-2019 Nick Meincken</p>
        </Footer>
      </Container>
    );
  }
}

export default Template;
