import React, { Component } from "react";
import styled from "styled-components";
import { color } from "./../../Shared/styles";

const SiteData = styled.div`
  color: ${color.lighter};
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
`;

const ModalMain = styled.section`
  position: fixed;
  background: #fff;
  color: #000;
  max-width: 800px;
  padding: 20px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <ModalWrap className={showHideClassName}>
      <ModalMain>
        <h3>About this site</h3>
        <p>
          This site is built on React and uses styled-components and CSS Grid
        </p>
        <p>
          This site is constantly evolving and a practice ground for honing my
          skills.
        </p>
        <button onClick={handleClose}>Close</button>
      </ModalMain>
    </ModalWrap>
  );
};

class AboutSite extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <SiteData>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          About this site
        </button>
      </SiteData>
    );
  }
}

export default AboutSite;
