import React, { Component } from "react";
import { EducationBlock } from "./../05-Education/Index";
import { SkillsBlock } from "./../06-Skills/Index";
import { SectionHeading } from "./../../Shared/UI";

import styled from "styled-components";

const ResumeContainer = styled.section`
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;
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
          <SectionHeading title="Education" />
          <div className="nine">
            <div className="row item">
              <EducationBlock />
            </div>
          </div>
        </div>

        <div className="row work">
          <SectionHeading title="Contractor History" />
          <div className="nine">{work}</div>
        </div>

        <div className="row skill">
          <SectionHeading title="Skills" />
          <div className="nine main-col">
            <p>{skillmessage}</p>
            <SkillsBlock />
          </div>
        </div>
      </ResumeContainer>
    );
  }
}

export default Resume;
