import React, { Component } from "react";

class Personal extends Component {
  render() {
    if (this.props.data) {
      var sectiontitle = this.props.data.sectiontitle;
      var softskills = this.props.data.list.map(function(item) {
        return <li key={item.item}>{item.item}</li>;
      });
    }
    return (
      <>
        <h3>{sectiontitle}</h3>
        <ul>{softskills}</ul>
      </>
    );
  }
}

export default Personal;
