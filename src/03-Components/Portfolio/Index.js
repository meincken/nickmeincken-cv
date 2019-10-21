import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import "./portfolio.css";

const PortfolioBlock = styled.section`
  background: #e1e1e1;
  padding: 50px 0;

  @media (min-width: 768px) {
    padding: 150px 0;
  }
`;

const SectionTitle = styled.h1`
  color: #1e1e1e;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 48px;
  text-align: center;
  text-transform: uppercase;
`;

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        var projectImage = "assets/portfolio/" + projects.image;
        // var projectImage = projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href={projects.url}
                title={projects.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <PortfolioBlock id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <SectionTitle>Check out some of my previous works.</SectionTitle>
            <div
              id="portfolio-wrapper"
              className="portfolio-wrapper bgrid-quarters s-bgrid-halves cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </PortfolioBlock>
    );
  }
}

export default Portfolio;
