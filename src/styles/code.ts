import { css } from '@emotion/react';
import { themeVar } from '../themes';

const code = css`
  // <Kbd> component
  kbd {
    display: inline-block;
    padding: 0.3rem 0.5rem;
    font-size: 1.1rem;
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    line-height: 1rem;
    vertical-align: middle;
    background-color: transparent;
    border: 0.1rem solid ${themeVar('color-code-bg-block')};
    border-radius: 0.6rem;
    color: ${themeVar('color-secondary')};
  }

  // Shared between <Code> and <Pre> components
  code,
  pre {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    margin: 0;
    background: ${themeVar('color-code-bg-block')};
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1.6rem;
    line-height: 1.5rem;
    tab-size: 4;
    hyphens: none;
    border-radius: 0.6rem;
    color: ${themeVar('color-secondary')};
  }

  // Code without <Pre> parent
  :not(pre) > code {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.2rem 0.5rem;
    background: ${themeVar('color-code-bg-inline')};
    font-size: 85%;
  }

  // <Pre> component
  pre {
    overflow: auto;
    position: relative;
    padding: 1.6rem;
    line-height: 1.45;
    overflow: auto;
    margin: 0 0 1.6rem 0;

    > code {
      font-size: 1.4rem;
    }
  }

  // <Code> component
  code {
    span {
      font-family: inherit;
      color: ${themeVar('color-secondary')};
    }
  }

  /*  */
  /* Variables */
  /*  */
  .token.tag,
  .token.punctuation {
    color: ${themeVar('color-code-tag')};
  }
  .token.attr-value,
  .token.string {
    color: ${themeVar('color-code-string')};
  }
  .token.keyword,
  .token.template-punctuation {
    color: ${themeVar('color-code-keyword')};
  }
  .token.selector {
    color: ${themeVar('color-code-selector')};
  }
  .token.property,
  .token.property-access,
  .token.operator {
    color: ${themeVar('color-code-property')};
  }
  .token.number {
    color: ${themeVar('color-code-number')};
  }
  .token.comment {
    color: ${themeVar('color-code-comment')};
  }
  .token.attr-name,
  .token.function {
    color: ${themeVar('color-code-function')};
  }
  .token.class-name,
  .token.tag,
  .token.key {
    color: ${themeVar('color-code-classname')};
  }
  .token.variable,
  .token.boolean {
    color: ${themeVar('color-code-variable')};
  }
`;

export default code;
