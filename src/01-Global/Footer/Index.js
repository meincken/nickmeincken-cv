import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Copyright from "./../Copyright/Index";
import Social from "./../Social/Index";
import AboutSite from "./../AboutSite/Index";
import styled from "styled-components";
import { color, typography } from "./../../Shared/styles";

const FooterBlock = styled.footer`
  background-color: ${color.darkest};
  border-top: 1px solid ${color.primary};
  color: ${color.lighter};
  font-size: ${typography.size.s2};
  padding-bottom: 48px;
  padding-top: 48px;
  position: relative;
  text-align: center;

  & a,
  a:visited {
    color: ${color.primary};
    text-decoration: none;
  }

  a:focus,
  a:hover {
    color: ${color.lightest};
  }
`;

const GoTo = styled.div`
  cursor: pointer;
  left: 50%;
  margin-left: -35px;
  position: absolute;
  top: -10px;

  .fa-circle path {
    stroke: ${color.primary};
    stroke-width: 5px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterBlock>
        <div className="twelve columns">
          <Social />
          <Copyright />

          <GoTo id="go-top">
            <Link
              className="smoothscroll fa-layers fa-fw"
              to="home"
              smooth={true}
              offset={0}
              duration={900}
            >
              <FontAwesomeIcon
                icon={faCircle}
                color="#000"
                size="4x"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faAngleUp}
                color="#A9CC17"
                size="4x"
                fixedWidth
              />
            </Link>
          </GoTo>
          <AboutSite />
        </div>
      </FooterBlock>
    );
  }
}

export default Footer;
