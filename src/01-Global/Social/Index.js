import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { color } from "./../../Shared/styles";

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
      <a key={network.name} href={network.url}>
        <FontAwesomeIcon icon={["fab", network.className]} size="2x" />
      </a>
    ))}
  </>
);

const SocialLinks = styled.div`
  margin: 18px 0 30px;
  padding: 0;

  a {
    color: ${color.primary};
    margin: 0 0 0 42px;
    transition: all 1s;

    &:hover {
      color: ${color.lightest};
    }
    &:first-child {
      margin-left: 0;
    }
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
