/* eslint-disable @typescript-eslint/no-explicit-any */
export const interpolateProp =
  <T extends Record<string, any>, N extends keyof T>(
    propName: N,
    values: Partial<{
      [key in T[N]]: any;
    }>
  ) =>
  (props: T): string | number | undefined =>
    props[propName] && values[props[propName]];
