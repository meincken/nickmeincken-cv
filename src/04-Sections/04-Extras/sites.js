import React, { Component } from "react";

class Sites extends Component {
  render() {
    if (this.props.data) {
      var sites = this.props.data.map(function(item) {
        return (
          <span key={item.title}>
            <dt>
              <a href={item.url}>{item.title}</a>
            </dt>
            <dd>{item.description}</dd>
          </span>
        );
      });
    }
    return <dl>{sites}</dl>;
  }
}

export default Sites;
