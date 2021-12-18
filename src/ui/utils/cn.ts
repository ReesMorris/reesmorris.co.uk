import { ClassNamesArg, cx } from '@emotion/css';

export const cn = (...classNames: ClassNamesArg[]) => cx(classNames);
