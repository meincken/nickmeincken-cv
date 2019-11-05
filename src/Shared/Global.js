import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,900";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.regular};
  background: #1e1e1e;
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  a {
    color: ${color.primary};
  }

  p {
    line-height: 1.5;
  }

  ul {
    padding-left: 0;
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    max-width: 1040px;
    width: 90%;
  }

  @media (min-width: 768px) {
    .row {
      width: 100%;
    }
  }

  .row .row,
  .row .row .three,
  .row .row .six {
    width: 100%;
  }

  .row .row .twelve {
    padding-left: 0;
    padding-right: 0;
  }

  .row .three {
    width: 100%;
  }

  @media (min-width: 768px) {
    .row .three {
      width: 24%;
    }
  }

  .row .six {
    width: 100%;
  }

  @media (min-width: 768px) {
    .row .six {
      width: 49%;
    }
  }

  .row .nine {
    width: 100%;
  }
  @media (min-width: 768px) {
    .row .nine {
      width: 74%;
    }
  }

  .row .twelve {
    width: 100%;
  }

  .education,
  .work {
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 48px;
    padding-bottom: 24px;
  }

  .headerCol {
    padding-top: 9px;
    padding-bottom: 20px;
  }

  .contact-details,
  .download {
    width: 100%;
  }

  @media (min-width: 768px) {
    .contact-details {
      width: 60%;
    }

    .download {
      width: 40%;
    }
  }

  #root {
    display: grid;
  }

  @media print {
    body {
      font-size: 13px;
      color: #000;
    }

    .hidden-print-block {
      display: none;
    }

    p {
      font-size: 12px;
    }

    .contractor-history {
      page-break-after: always;
    }

    h1 {
      line-height: 1;
    }

    .professional-skills .block,
    .six {
      width: 50%;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}

    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
