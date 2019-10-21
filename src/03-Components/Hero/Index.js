import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Img from "./../../images/header-background.jpg";
import Social from "./../../01-Global/Social/Index";
import styled from "styled-components";

const Hero = styled.header`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${Img});
  background-size: cover;
  display: flex;
  height: 600px;
  justify-content: center;
  position: relative;
  width: 100vw;

  @media (min-width: 960px) {
    height: 100vh;
    min-height: 600px;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1040px;
  padding: 30px 0;
  text-align: center;
  width: 85%;
`;

const BannerText = styled.div`
  width: 100%;

  span {
    display: inline-block;
  }
`;

const Title = styled.h1`
  color: #a9cc17;
  font-size: 50px;
  font-weight: 200;
  letter-spacing: -2px;
  line-height: 1.2;
  margin: 0 auto 20px;
  text-transform: uppercase;

  span {
    border-bottom: 1px solid #a9cc17;
  }

  small {
    color: #fff;
    display: block;
    font-size: 46%;
    line-height: 1.1;
    margin-top: 20px;
  }

  @media (min-width: 960px) {
    font-size: 90px;
  }
`;

const SubTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  line-height: 1.2;
  margin: 0 auto;
  width: 80%;
`;

const HR = styled.hr`
  border-color: #2f2d2e;
  border-color: hsla(0, 0%, 58.8%, 0.1);
  margin: 18px auto 24px;
  width: 60%;
`;

const ScrollDown = styled.p`
  a {
    border-radius: 100%;
    bottom: 30px;
    color: #a9cc17;
    display: block;
    font-size: 42px;
    height: 42px;
    left: 50%;
    line-height: 1.2;
    margin-left: -29px;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 42px;

    &:hover {
      color: #fff;
    }
  }
`;

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
    }

    return (
      <div id="home" className="hero">
        <Hero>
          <Banner>
            <BannerText>
              <Title>
                <span>{name}</span>
                <small>{occupation}</small>
              </Title>
              <SubTitle>
                I'm a {city} based <span>{occupation}</span>. {description}
              </SubTitle>
              <HR />
              <Social />
            </BannerText>
          </Banner>

          <ScrollDown>
            <Link
              activeClass="current"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
            >
              <FontAwesomeIcon icon={faAngleDown} size="lg" />
            </Link>
          </ScrollDown>
        </Hero>
      </div>
    );
  }
}

export default Header;
