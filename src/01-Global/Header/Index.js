import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const HeaderNav = styled.header`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  height: 50px;
  letter-spacing: 1.5px;
  width: 100vw;
  z-index: 9;

  &.stuck {
    position: fixed;
  }

  @media (min-width: 768px) {
    background: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid #a9cc17;
    left: 0;
    letter-spacing: 2.5px;
    margin: 0 auto;
    text-transform: uppercase;
    width: 100%;

    &.stuck {
      background: rgba(0, 0, 0, 1);
    }
  }
`;

const Header = props => (
  <HeaderNav className={props.sticky ? "stuck" : ""}>
    <Nav />
  </HeaderNav>
);

export default Header;
