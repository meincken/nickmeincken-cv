import React, { Component } from "react";
import styled from "styled-components";

const DL = styled.dl`
  margin: 0;

  dd {
    margin-left: 0;
    margin-bottom: 10px;
  }

  dt {
    @media print {
      a[href]:after {
        content: " (" attr(href) ")";
      }
    }
  }
`;

class Sites extends Component {
  render() {
    if (this.props.data) {
      var sites = this.props.data.map(function(item) {
        return (
          <DL key={item.title}>
            <dt>
              <a href={item.url}>{item.title}</a>
            </dt>
            <dd>{item.description}</dd>
          </DL>
        );
      });
    }
    return <>{sites}</>;
  }
}

export default Sites;
