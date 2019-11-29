import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button, Heading } from "./../../Shared/UI";
import { color } from "./../../Shared/styles";
import profilePic from "./../../Images/profilepic.jpg";

import styled from "styled-components";

const Container = styled.section`
  align-content: center;
  background: ${color.darkest};
  color: ${color.lighter};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  min-height: 100vh;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;

  .box:nth-of-type(1) {
    grid-column: span 12;

    @media (min-width: 768px) {
      grid-column: span 3;
    }
  }

  .box:nth-of-type(2) {
    grid-column: span 12;

    @media (min-width: 768px) {
      grid-column: span 9;
    }
  }

  a {
    color: ${color.lightest};
  }

  p {
    color: ${color.lighter};
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const ContainerInner = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  display: block;
  height: 120px;
  margin: 30px auto;
  position: relative;
  width: 120px;

  @media (min-width: 768px) {
    margin: 0 auto 30px;
  }
`;

const LinkStyle = styled(Link)`
  background: ${color.primary};
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
      <Container id="about">
        <div className="box">
          <ProfileImg src={profilePic} alt="Nick Meincken" />
        </div>
        <div className="box">
          <Heading title="About Me" />
          <Content content={bio} />
          <ContainerInner>
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
          </ContainerInner>
        </div>
      </Container>
    );
  }
}

const Content = ({ content }) => <p>{content}</p>;

const LinkTo = ({ to, title }) => (
  <LinkStyle to={to}>
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </LinkStyle>
);

export default About;
