import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
var social = [
  {
    name: "twitter",
    url: "http://twitter.com/meincken",
    className: "twitter"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/meincken/",
    className: "linkedin"
  },
  {
    name: "instagram",
    url: "http://instagram.com/meincken",
    className: "instagram"
  },
  {
    name: "strava",
    url: "https://www.strava.com/athletes/meincken",
    className: "strava"
  },
  {
    name: "github",
    url: "http://github.com/meincken",
    className: "github"
  }
];

const SocialBlock = ({ social }) => (
  <>
    {social.map(network => (
      <li key={network.name}>
        <a href={network.url}>
          <FontAwesomeIcon icon={["fab", network.className]} size="2x" />
        </a>
      </li>
    ))}
  </>
);

const SocialLinks = styled.ul`
  margin: 18px 0 30px;
  padding: 0;

  & li {
    color: #a9cc17;
    display: inline-block;
    margin: 0 0 0 42px;
    padding: 0;
  }

  & li:first-child {
    margin-left: 0;
  }
`;

class Social extends Component {
  render() {
    return (
      <>
        <SocialLinks>
          <SocialBlock social={social} />
        </SocialLinks>
      </>
    );
  }
}

export default Social;
