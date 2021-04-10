import { css } from '@emotion/react';
import { Theme } from '../themes';

const code = (theme: Theme) => {
  return css`
    // <Kbd> component
    kbd {
      display: inline-block;
      padding: 0.3rem 0.5rem;
      font-size: 1.1rem;
      font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
      line-height: 1rem;
      vertical-align: middle;
      background-color: transparent;
      border: 0.1rem solid ${theme.code.background_dark};
      border-radius: 0.6rem;
      color: ${theme.colors.secondary};
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
      background: ${theme.code.background_dark};
      font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 1.6rem;
      line-height: 1.5rem;
      tab-size: 4;
      hyphens: none;
      border-radius: 0.6rem;
      color: ${theme.colors.secondary};
    }

    // Code without <Pre> parent
    :not(pre) > code {
      white-space: normal;
      border-radius: 0.2em;
      padding: 0.2rem 0.5rem;
      background: ${theme.code.background_light};
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
        color: ${theme.colors.secondary};
      }
    }

    /*  */
    /* Variables */
    /*  */
    .token.tag,
    .token.punctuation {
      color: ${theme.code.colors.tag};
    }
    .token.attr-value,
    .token.string {
      color: ${theme.code.colors.string};
    }
    .token.keyword,
    .token.template-punctuation {
      color: ${theme.code.colors.keyword};
    }
    .token.selector {
      color: ${theme.code.colors.selector};
    }
    .token.property,
    .token.property-access,
    .token.operator {
      color: ${theme.code.colors.property};
    }
    .token.number {
      color: ${theme.code.colors.number};
    }
    .token.comment {
      color: ${theme.code.colors.comment};
    }
    .token.attr-name,
    .token.function {
      color: ${theme.code.colors.function};
    }
    .token.class-name,
    .token.tag,
    .token.key {
      color: ${theme.code.colors.classname};
    }
    .token.variable,
    .token.boolean {
      color: ${theme.code.colors.variable};
    }
  `;
};

export default code;
