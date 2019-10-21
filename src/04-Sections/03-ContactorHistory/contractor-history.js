import React, { Component } from "react";

const Title = ({ title }) => (
  <header className="section-title">
    <h2>{title}</h2>
  </header>
);

class ContractorHistory extends Component {
  render() {
    if (this.props.data) {
      var sectiontitle = this.props.data.sectiontitle;
      var company = this.props.data.experience.map(function(content, index) {
        return (
          <div key={index} className={content.class}>
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
        <article className="twelve">
          <Title title={sectiontitle} />
        </article>
        {company}
      </>
    );
  }
}

export default ContractorHistory;
