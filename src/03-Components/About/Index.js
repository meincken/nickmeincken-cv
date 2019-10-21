import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import profilePic from "./../../images/profilepic.jpg";

import styled from "styled-components";

const AboutContainer = styled.section`
  background: #1e1e1e;
  color: #e1e1e1;
  overflow: hidden;
  padding-bottom: 66px;
  padding-top: 96px;

  a {
    color: #fff;
  }

  p {
    color: #e1e1e1;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  display: block;
  height: 120px;
  margin: 0 auto 30px;
  position: relative;
  width: 120px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 12px;
`;

const ButtonStyle = styled.a`
  background: #a9cc17;
  border-radius: 5px;
  display: block;
  margin-top: 6px;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;

  svg {
    margin-right: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1040px;
  width: 90%;

  .three {
    width: 24%;
  }

  .nine {
    width: 74%;
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    width: 100%;
  }

  .contact-details {
    width: 60%;
  }

  .download {
    width: 40%;
  }
`;

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <AboutContainer id="about">
        <Row>
          <div className="three columns">
            <ProfileImg src={profilePic} alt="Nick Meincken" />
          </div>
          <div className="nine">
            <Heading title="About Me" />
            <Content content={bio} />
            <div className="row">
              <div className="contact-details">
                <Heading title="Contact" />
                <p className="address">
                  <span>{email}</span>
                </p>
              </div>
              <div className="download">
                <p>
                  <Button href={resumeDownload} title="Download Resume" />
                  <Link to="/resume">
                    <FontAwesomeIcon icon={faDownload} />
                    Online Resume
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </AboutContainer>
    );
  }
}

const Heading = ({ title }) => <Title>{title}</Title>;
const Content = ({ content }) => <p>{content}</p>;
const Button = ({ href, title }) => (
  <ButtonStyle href={href}>
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </ButtonStyle>
);

export default About;
