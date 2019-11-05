import React, { Component } from "react";
import Education from "./../05-Education/Index";
import Skills from "./../06-Skills/Index";
import styled from "styled-components";

const ResumeContainer = styled.section`
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;
`;

const SectionTitle = styled.h1`
  float: left;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;

  span {
    border-bottom: 3px solid #a9cc17;
    padding-bottom: 6px;
  }
`;

const SegmentTitle = styled.h3`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
`;

const SectionInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 18px;
  margin-top: 9px;

  span {
    display: inline-block;
    font-weight: 200;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company} className="twelve">
            <SegmentTitle>{work.company}</SegmentTitle>
            <SectionInfo>
              {work.title}
              <span>&bull;</span> <span className="date">{work.years}</span>
            </SectionInfo>
            <p>{work.description}</p>
          </div>
        );
      });
    }

    return (
      <ResumeContainer id="resume">
        <div className="row education">
          <div className="three headerCol">
            <Heading title="Education" />
          </div>

          <div className="nine">
            <div className="row item">
              <Education />
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three headerCol">
            <Heading title="Contractor History" />
          </div>
          <div className="nine">{work}</div>
        </div>

        <div className="row skill">
          <div className="three headerCol">
            <Heading title="Skills" />
          </div>
          <div className="nine main-col">
            <p>{skillmessage}</p>
            <Skills />
          </div>
        </div>
      </ResumeContainer>
    );
  }
}

const Heading = ({ title }) => (
  <SectionTitle>
    <span>{title}</span>
  </SectionTitle>
);

export default Resume;
