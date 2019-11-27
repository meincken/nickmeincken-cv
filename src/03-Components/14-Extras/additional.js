import React, { Component } from "react";
import styled from "styled-components";

const DL = styled.dl`
  dd {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

class Additional extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.sectiontitle;
      var content = this.props.data.content;
      var additional = this.props.data.list.map(function(item) {
        return (
          <DL key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.description}</dd>
          </DL>
        );
      });
    }
    return (
      <>
        <h3>{title}</h3>
        <p>{content}</p>
        {additional}
      </>
    );
  }
}

export default Additional;
