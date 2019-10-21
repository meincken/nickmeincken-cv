import React, { Component } from "react";
import styled from "styled-components";

const CopyrightBlock = styled.ul`
  margin: 0;
  padding: 0;

  li {
    color: #fff;
    display: inline-block;
    line-height: 24px;
    margin: 0;
    padding: 0;

    &::before {
      color: #a9cc17;
      content: "∙";
      font-size: 30px;
      line-height: 1;
      padding-left: 10px;
      padding-right: 10px;
    }

    &:first-child:before {
      display: none;
    }

    & a {
      display: inline-block;
    }
  }
`;

class Copyright extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <CopyrightBlock>
        <li>&copy; Copyright {this.getYear()} Nick Meincken</li>
        <li>
          Design by{" "}
          <a
            title="Built By Moustache"
            href="https://www.builtbymoustache.com/"
          >
            Built By Moustache
          </a>
        </li>
      </CopyrightBlock>
    );
  }
}

export default Copyright;
