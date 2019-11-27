import React, { Component } from "react";

const Title = ({ title }) => (
  <header className="twelve section-title">
    <h2>{title}</h2>
  </header>
);

const SegmentHeading = ({ title }) => <h3>{title}</h3>;

class ProfessionalSkills extends Component {
  render() {
    if (this.props.data) {
      var sectiontitle = this.props.data.sectiontitle;
      var qualifications = this.props.data.qualifications.segmentHeading;
      var qualificationsList = this.props.data.qualifications.list.map(function(
        item
      ) {
        return (
          <li key={item.item}>
            {item.item} <strong>{item.strong}</strong>
          </li>
        );
      });
      var techskills = this.props.data.techskills.segmentHeading;
      var techskillsList = this.props.data.techskills.list.map(function(item) {
        return <li key={item.item}>{item.item}</li>;
      });
    }

    return (
      <section className="professional-skills">
        <Title title={sectiontitle} />
        <div className="six">
          <SegmentHeading title={qualifications} />
          <ul>{qualificationsList}</ul>
        </div>
        <div className="six">
          <SegmentHeading title={techskills} />
          <ul>{techskillsList}</ul>
        </div>
      </section>
    );
  }
}

export default ProfessionalSkills;
