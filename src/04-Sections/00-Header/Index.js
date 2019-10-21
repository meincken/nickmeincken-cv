import React, { Component } from "react";

const Title = ({ title, subtitle }) => (
  <h1 className="header">
    {title} <small>{subtitle}</small>
  </h1>
);

class Header extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var subtitle = this.props.data.subtitle;
    }

    return (
      <>
        <Title title={title} subtitle={subtitle} />
      </>
    );
  }
}

export default Header;
