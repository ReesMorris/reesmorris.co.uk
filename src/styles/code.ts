import { css } from 'styled-components';

export default css`
  // <Kbd> component
  kbd {
    display: inline-block;
    padding: 0.3rem 0.5rem;
    font-size: 1.1rem;
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    line-height: 1rem;
    vertical-align: middle;
    background-color: transparent;
    border: 0.1rem solid ${props => props.theme.code.background_dark};
    border-radius: 0.6rem;
    color: ${props => props.theme.colors.secondary};
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
    background: ${props => props.theme.code.background_dark};
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1.6rem;
    line-height: 1.5rem;
    tab-size: 4;
    hyphens: none;
    border-radius: 0.6rem;
    color: ${props => props.theme.colors.secondary};
  }

  // Code without <Pre> parent
  :not(pre) > code {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.2rem 0.5rem;
    background: ${props => props.theme.code.background_light};
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
      color: ${props => props.theme.colors.secondary};
    }
  }

  /*  */
  /* Variables */
  /*  */
  .token.tag,
  .token.punctuation {
    color: ${props => props.theme.code.colors.tag};
  }
  .token.attr-value,
  .token.string {
    color: ${props => props.theme.code.colors.string};
  }
  .token.keyword,
  .token.template-punctuation {
    color: ${props => props.theme.code.colors.keyword};
  }
  .token.selector {
    color: ${props => props.theme.code.colors.selector};
  }
  .token.property,
  .token.property-access,
  .token.operator {
    color: ${props => props.theme.code.colors.property};
  }
  .token.number {
    color: ${props => props.theme.code.colors.number};
  }
  .token.comment {
    color: ${props => props.theme.code.colors.comment};
  }
  .token.attr-name,
  .token.function {
    color: ${props => props.theme.code.colors.function};
  }
  .token.class-name,
  .token.tag,
  .token.key {
    color: ${props => props.theme.code.colors.classname};
  }
  .token.variable,
  .token.boolean {
    color: ${props => props.theme.code.colors.variable};
  }
`;
