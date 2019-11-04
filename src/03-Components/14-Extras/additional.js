import React, { Component } from "react";

class Additional extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.sectiontitle;
      var content = this.props.data.content;
      var additional = this.props.data.list.map(function(item) {
        return (
          <dl key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.description}</dd>
          </dl>
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
