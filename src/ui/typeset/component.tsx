import styled from '@emotion/styled';
import { themeVar, staticThemeVar } from '~/theme';

interface TypesetProps {
  children?: React.ReactNode;
}

const ScTypeset = styled.div`
  line-height: ${staticThemeVar('line-height-large')};
  color: ${themeVar('color-text-lighter')};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${staticThemeVar('space-25')};
    color: ${themeVar('color-text-base')};
  }
  h2 {
    margin-bottom: ${staticThemeVar('space-1')};
  }

  p,
  ul,
  ol,
  pre,
  details,
  .note,
  .tabs {
    margin-bottom: ${staticThemeVar('space-2')};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }

  ul,
  ol {
    margin-left: 17px;
    list-style-position: outside;
  }
  li {
    &:not(:last-of-type) {
      margin-bottom: ${staticThemeVar('space-05')};
    }
  }
  li > ul,
  li > ol {
    margin-left: 20px;
  }

  blockquote {
    color: ${themeVar('color-blockquote-text')};
    padding-top: ${staticThemeVar('space-1')};
    padding-left: ${staticThemeVar('space-2')};
    padding-bottom: ${staticThemeVar('space-1')};
    margin-bottom: ${staticThemeVar('space-2')};
    border-left-width: ${staticThemeVar('border-width-blockquote')};
    border-left-style: solid;
    border-left-color: ${themeVar('color-blockquote-border')};
  }

  pre,
  code {
    color: ${themeVar('color-text-base')};
    font-size: ${staticThemeVar('font-size-6')};
    font-family: ${staticThemeVar('font-family-mono')};
    line-height: ${staticThemeVar('line-height-base')};
  }

  *:not(pre) > code {
    background-color: ${themeVar('color-code-background')};
    border-radius: ${staticThemeVar('border-radius-small')};
    padding: ${staticThemeVar('space-05')};
  }

  & > pre,
  .tabcontent pre {
    margin-left: calc(${staticThemeVar('space-2')} * -1);
    margin-right: calc(${staticThemeVar('space-2')} * -1);
  }

  pre {
    background-color: ${themeVar('color-code-background')};
    margin-bottom: ${staticThemeVar('space-2')};
    padding: ${staticThemeVar('space-15')};
    overflow-x: auto;
    border-radius: ${staticThemeVar('border-radius-medium')};

    + .tabcontent {
      padding-top: 0;
    }

    .keyword {
      color: ${themeVar('color-code-keyword')};
    }
    .string,
    .hexcode {
      color: ${themeVar('color-code-string')};
    }
    .comment {
      color: ${themeVar('color-code-comment')};
    }
    .property-access,
    .number,
    .constant,
    .selector,
    .language-css .variable {
      color: ${themeVar('color-code-constant')};
    }
    .function {
      color: ${themeVar('color-code-function')};
    }
    .class-name,
    .maybe-class-name {
      color: ${themeVar('color-code-class')};
    }
    .console,
    .spread {
      color: inherit;
    }
  }
`;

export const Typeset = (props: TypesetProps) => {
  const { children, ...rest } = props;
  return <ScTypeset {...rest}>{children}</ScTypeset>;
};
