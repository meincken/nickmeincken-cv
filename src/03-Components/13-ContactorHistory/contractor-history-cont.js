import React, { Component } from "react";

const Title = ({ title }) => (
  <header className="twelve section-title show-print">
    <h2>{title}</h2>
  </header>
);

class ContractorHistory extends Component {
  render() {
    if (this.props.data) {
      var sectiontitle = this.props.data.sectiontitle;
      var company = this.props.data.experience.map(function(content) {
        return (
          <div key={content.company} className={content.class}>
            <h3>{content.company}</h3>
            <h4>{content.role}</h4>
            <p>
              <span>{content.date}</span>
              {content.description}
            </p>
            <ul>
              {content.list.map(function(item) {
                return <li key={item.item}>{item.item}</li>;
              })}
            </ul>
          </div>
        );
      });
    }

    return (
      <>
        <Title title={sectiontitle} />
        {company}
      </>
    );
  }
}

export default ContractorHistory;
