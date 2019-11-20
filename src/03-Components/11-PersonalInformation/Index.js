import React, { Component } from "react";
import { Section, ArticleTwelve } from "./../../Shared/UI";

const Title = ({ title }) => (
  <header className="sectionTitle">
    <h2>{title}</h2>
  </header>
);
const ArticleTitle = ({ title }) => <h3>{title}</h3>;
const ArticleContent = ({ content }) => <>{content}</>;

class PersonalInformation extends Component {
  render() {
    if (this.props.data) {
      var sectiontitle = this.props.data.sectiontitle;
      var articletitle = this.props.data.articletitle;
      var articlecontent = this.props.data.articlecontent.map(function(
        content
      ) {
        return <p key={content.content}>{content.content}</p>;
      });
    }

    return (
      <Section sectionTitle="personal-information">
        <article className="twelve">
          <Title title={sectiontitle} />
          <ArticleTitle title={articletitle} />
          <ArticleContent content={articlecontent} />
        </article>
      </Section>
    );
  }
}

export default PersonalInformation;
