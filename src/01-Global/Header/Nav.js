import React, { Component } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 6px;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;
  display: block;
  position: absolute;
  right: 20px;
  top: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavList = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  display: none;
  height: auto;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    min-height: 48px;
    position: static;
    width: auto;
  }

  &.collapsed {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-top: 50px;
    max-height: 0;
    overflow: hidden;
    transition-duration: 0.4s;
    width: 100%;

    @media (min-width: 768px) {
      flex-flow: row;
      margin-top: 0;
      width: auto;
    }

    &.is-expanded {
      max-height: 500px; /* approximate max height */
      overflow: hidden;
      transition-duration: 0.4s;
      transition-timing-function: ease-in;
    }
  }

  > a {
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 32px;
    padding: 15px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;
    width: 100%;

    @media (min-width: 768px) {
      padding: 8px 13px;
      width: auto;
    }

    &.current {
      color: #a9cc17;
    }

    &:active {
      background-color: transparent;
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <>
        <Button
          className={`fa-layers fa-fw`}
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
          title="Show navigation"
        >
          <FontAwesomeIcon icon={faBars} color="#A9CC17" size="3x" />
          <span className="sr-only">Show navigation</span>
        </Button>
        <NavList className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink
            target="home"
            title="Home"
            onClick={e => this.handleToggle(e)}
          />
          <NavLink
            target="about"
            title="About"
            onClick={e => this.handleToggle(e)}
          />
          <NavLink
            target="resume"
            title="Resume"
            onClick={e => this.handleToggle(e)}
          />
          <NavLink
            target="portfolio"
            title="Works"
            onClick={e => this.handleToggle(e)}
          />
          {/*<a className="smoothscroll" href="#contact">Contact</a>*/}
        </NavList>
      </>
    );
  }
}

const NavLink = ({ target, title }) => (
  <Link
    activeClass="current"
    to={target}
    spy={true}
    smooth={true}
    offset={0}
    duration={900}
  >
    {title}
  </Link>
);

export default Navigation;
