import React from "react";
import styled from "styled-components";
var skills = [
  {
    name: "AEM",
    level: "90%"
  },
  {
    name: "Wordpress",
    level: "90%"
  },
  {
    name: "HTML5",
    level: "90%"
  },
  {
    name: "JavaScript/jQuery",
    level: "70%"
  },
  {
    name: "CSS",
    level: "90%"
  },
  {
    name: "ReactJS",
    level: "70%"
  },
  {
    name: "Git",
    level: "80%"
  },
  {
    name: "EMAIL",
    level: "70%"
  }
];

const Bars = styled.div`
  float: left;
  padding: 0;
  text-align: left;
  width: 100%;
`;

const SkillsList = styled.ul`
  margin: 0;
  margin-top: 36px;

  li {
    position: relative;
    list-style: none;

    margin-bottom: 60px;
    background: #ccc;
    height: 42px;
    border-radius: 3px;
    margin-left: 0;

    em {
      color: #1e1e1e;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      font-style: normal;
      position: relative;
      top: -25px;
    }

    .bar-expand {
      background: #1e1e1e;
      border-radius: 3px 0 0 3px;
      display: inline-block;
      height: 42px;
      left: 0;
      line-height: 42px;
      margin: 0;
      padding-right: 24px;
      position: absolute;
      top: 0;
    }
  }
`;

export const SkillsBlock = () => (
  <>
    <Bars>
      <SkillsList>
        {skills.map(skills => (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className="bar-expand"></span>
            <em>{skills.name}</em>
          </li>
        ))}
      </SkillsList>
    </Bars>
  </>
);
