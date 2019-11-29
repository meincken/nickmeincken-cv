import React, { Component } from "react";
import { EducationBlock } from "./../05-Education/Index";
import { SkillsBlock } from "./../06-Skills/Index";
import { SectionHeading } from "./../../Shared/UI";
import { color } from "./../../Shared/styles";

import styled from "styled-components";

const Container = styled.section`
  background: ${color.lightest};
  color: ${color.darkest};
`;

const ContainerBlock = styled.article`
  align-content: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 20px;
  border-bottom: 1px solid ${color.lighter};

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }

  section {
    grid-column: span 9;
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
          <article key={work.company}>
            <SegmentTitle>{work.company}</SegmentTitle>
            <SectionInfo>
              {work.title}
              <span>&bull;</span> <span className="date">{work.years}</span>
            </SectionInfo>
            <p>{work.description}</p>
          </article>
        );
      });
    }

    return (
      <Container id="resume">
        <ContainerBlock>
          <SectionHeading title="Education" />
          <section>
            <EducationBlock />
          </section>
        </ContainerBlock>

        <ContainerBlock>
          <SectionHeading title="Contractor History" />
          <section>{work}</section>
        </ContainerBlock>

        <ContainerBlock className="skill">
          <SectionHeading title="Skills" />
          <section>
            <p>{skillmessage}</p>
            <SkillsBlock />
          </section>
        </ContainerBlock>
      </Container>
    );
  }
}

export default Resume;
