import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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

export const Button = ({ href, title }) => (
  <ButtonStyle href={href} target="_blank">
    <FontAwesomeIcon icon={faDownload} />
    {title}
  </ButtonStyle>
);

export default Button;
