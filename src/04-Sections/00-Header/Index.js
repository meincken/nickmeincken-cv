import React, { Component } from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  h1 {
    color: #a9cc17;
    font-weight: 200;
    font-size: 80px;
    line-height: 1.25;
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
