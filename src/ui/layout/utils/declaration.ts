import { StandardPropertiesHyphen } from 'csstype';
import { TokenValue } from '~/theme';

export const declaration =
  (property: keyof StandardPropertiesHyphen) => (value: TokenValue) =>
    `${property}: ${value};`;
