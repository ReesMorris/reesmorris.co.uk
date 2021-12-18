import { Transition } from '..';
import { staticThemeVar } from '~/theme';

export const transition = (transition: Transition) =>
  staticThemeVar(`transition-${transition}`);
