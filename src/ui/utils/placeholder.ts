import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

export const placeholder = (
  styleRule: TemplateStringsArray,
  ...args: CSSInterpolation[]
) => {
  const styles = css(styleRule, ...args);

  return css`
    ::placeholder {
      ${styles}
    }

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      ${styles}
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      ${styles}
    }

    :-ms-input-placeholder {
      /* IE 10+ */
      ${styles}
    }

    :-moz-placeholder {
      /* Firefox 18- */
      ${styles}
    }
  `;
};
