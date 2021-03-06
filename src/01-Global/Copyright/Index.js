import React, { Component } from "react";
import styled from "styled-components";

const CopyrightBlock = styled.small`
  margin: 0;
  padding: 0;

  span,
  a {
    display: inline-block;
  }

  span {
    margin: 0 5px;
  }
`;

class Copyright extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <CopyrightBlock>
        &copy; Copyright {this.getYear()} Nick Meincken
        <span>&bull;</span>
        Design by{" "}
        <a title="Built By Moustache" href="https://www.builtbymoustache.com/">
          Built By Moustache
        </a>
      </CopyrightBlock>
    );
  }
}

export default Copyright;
