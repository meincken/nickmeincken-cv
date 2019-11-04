import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import profilePic from "./../../Images/profilepic.jpg";

import styled from "styled-components";

const AboutContainer = styled.section`
  background: #1e1e1e;
  color: #e1e1e1;
  overflow: hidden;
  padding-bottom: 66px;
  padding-top: 96px;
  height: 100vh;
  display: flex;
  align-items: center;

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
  font-weight: 400;
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

const LinkStyle = styled(Link)`
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

class About extends Component {
  render() {
    if (this.props.data) {
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <AboutContainer id="about">
        <div className="row">
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
                  <LinkTo title="Online Resume" to="/resume" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    );
  }
}

const Heading = ({ title }) => <Title>{title}</Title>;
const Content = ({ content }) => <p>{content}</p>;
const Button = ({ href, title }) => (
  <ButtonStyle href={href} target="_blank">
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </ButtonStyle>
);

const LinkTo = ({ to, title }) => (
  <LinkStyle to={to}>
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </LinkStyle>
);

export default About;
