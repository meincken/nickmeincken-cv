import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { color, typography } from "./styles";

import styled from "styled-components";

// Heading
const Title = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const Heading = ({ title }) => <Title>{title}</Title>;

// Button
const ButtonStyle = styled.a`
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

export const Button = ({ href, title }) => (
  <ButtonStyle href={href} target="_blank">
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </ButtonStyle>
);
