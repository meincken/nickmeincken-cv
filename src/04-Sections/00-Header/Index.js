import React, { Component } from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  h1 {
    font-size: 80px;
    color: #a9cc17;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 200;
    margin: 0;

    small {
      color: #e1e1e1;
      font-size: 65%;
      display: block;

      @media (min-width: 768px) {
        display: inline-block;
      }
    }
  }
`;
const Title = ({ title, subtitle }) => (
  <HeaderStyle>
    <h1>
      {title} <small>{subtitle}</small>
    </h1>
  </HeaderStyle>
);

class Header extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var subtitle = this.props.data.subtitle;
    }

    return <Title title={title} subtitle={subtitle} />;
  }
}

export default Header;
