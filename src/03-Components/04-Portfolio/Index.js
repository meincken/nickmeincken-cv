import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { color } from "./../../Shared/styles";

const Container = styled.section`
  background: #e1e1e1;
  padding: 50px 0;
  height: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 150px 0;
  }
`;

const Article = styled.article`
  align-content: center;
  background: ${color.lighter};
  color: ${color.darkest};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const SectionTitle = styled.h1`
  color: #1e1e1e;
  font-weight: 400;
  font-size: 16px;
  grid-column: span 12;
  letter-spacing: 1px;
  margin-bottom: 48px;
  text-align: center;
  text-transform: uppercase;
`;

const PortfolioBlock = styled.div`
  grid-column: span 12;

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  @media (min-width: 980px) {
    grid-column: span 3;
  }
`;

const PortfolioItem = styled.div`
  align-items: center;
  background: #1e1e1e;
  display: flex;
  justify-content: center;
  min-height: 215px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  a {
    cursor: pointer;
    display: block;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    filter: alpha(opacity=0);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.3s ease-in-out;
    width: 100%;
  }

  .link-icon {
    color: #a9cc17;
    display: block;
    filter: alpha(opacity=0);
    font-size: 18px;
    height: 30px;
    left: 50%;
    line-height: 30px;
    margin-left: -15px;
    margin-top: -15px;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    transition: opacity 0.3s ease-in-out;
    width: 30px;
  }

  img {
    vertical-align: bottom;
  }

  &:hover {
    .link-icon,
    .overlay {
      filter: alpha(opacity=100);
      opacity: 1;
    }
  }

  .portfolio-item-meta {
    padding: 18px;

    h5 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    p {
      color: #fff;
      margin-bottom: 0;
    }
  }
`;

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        var projectImage = "assets/portfolio/" + projects.image;
        return (
          <PortfolioBlock key={projects.title}>
            <PortfolioItem>
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
            </PortfolioItem>
          </PortfolioBlock>
        );
      });
    }

    return (
      <Container id="portfolio">
        <Article>
          <Heading title="Check out some of my previous works." />
          {projects}
        </Article>
      </Container>
    );
  }
}

const Heading = ({ title }) => <SectionTitle>{title}</SectionTitle>;
export default Portfolio;
