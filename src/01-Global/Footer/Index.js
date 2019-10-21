import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Copyright from "./../Copyright/Index";
import Social from "./../Social/Index";
import styled from "styled-components";

const FooterBlock = styled.footer`
  background-color: #1e1e1e;
  border-top: 1px solid #a9cc17;
  color: #e1e1e1;
  font-size: 14px;
  padding-bottom: 48px;
  padding-top: 48px;
  position: relative;
  text-align: center;

  & a,
  a:visited {
    color: #a9cc17;
  }

  a:focus,
  a:hover {
    color: #fff;
  }
`;

const GoTo = styled.div`
  left: 50%;
  margin-left: -35px;
  position: absolute;
  top: -10px;

  .fa-circle path {
    stroke: #a9cc17;
    stroke-width: 5px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterBlock>
        <div className="row">
          <div className="twelve columns">
            <Social />
            <Copyright />
          </div>

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
        </div>
      </FooterBlock>
    );
  }
}

export default Footer;
