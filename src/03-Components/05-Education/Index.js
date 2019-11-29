import React from "react";
import styled from "styled-components";
var education = [
  {
    school: "Adobe Training Center",
    degree: "AEM Sites developer",
    graduated: "March 2015"
  },
  {
    school: "The Community College Hackney",
    degree: "BTEC Web Authoring Level II (distinction)",
    graduated: "March 2006"
  },
  {
    school: "Spelthorne College, Middlesex",
    degree: "BTEC Photography & Business Skills",
    graduated: "April 1997"
  }
];

const Heading = styled.h3`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
`;

const ContentBlock = styled.div``;

const Content = styled.p`
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

  .date {
    font-weight: 200;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const EducationBlock = () => (
  <>
    {education.map(education => (
      <ContentBlock key={education.school}>
        <Heading>{education.school}</Heading>
        <Content>
          {education.degree} <span>&bull;</span>
          <span className="date">{education.graduated}</span>
        </Content>
      </ContentBlock>
    ))}
  </>
);
