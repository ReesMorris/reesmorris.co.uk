export interface LayoutProps {
  margin?: Margin;
  padding?: Padding;
  display?: Display;
  width?: string;
  gap?: SpaceValue;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  color?: Color;
  breakpointSmall?: Breakpoint;
  breakpointMedium?: Breakpoint;
  breakpointLarge?: Breakpoint;
  className?: string;
  children?: React.ReactNode;
}

export type SpaceValue = 0 | 0.5 | 1 | 2 | 3 | 4 | 5;

export type MarginValue = SpaceValue | 'auto';
export type Margin = {
  top?: MarginValue;
  right?: MarginValue;
  bottom?: MarginValue;
  left?: MarginValue;
  x?: MarginValue;
  y?: MarginValue;
};

export type PaddingValue = SpaceValue;
export type Padding = {
  top?: PaddingValue;
  right?: PaddingValue;
  bottom?: PaddingValue;
  left?: PaddingValue;
  x?: PaddingValue;
  y?: PaddingValue;
};

export enum Display {
  Block = 'block',
  Flex = 'flex',
  Inline = 'inline',
  None = 'none'
}

export type BreakpointSize = 'small' | 'medium' | 'large';
export type Breakpoint = Omit<
  LayoutProps,
  'breakpointSmall' | 'breakpointMedium' | 'breakpointLarge'
>;

export enum JustifyContent {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around'
}

export enum FlexWrap {
  NoWrap = 'nowrap',
  Wrap = 'wrap',
  WrapReverse = 'wrap-reverse'
}

export enum Color {
  Inherit = 'inherit',
  Base = 'base',
  Lighter = 'lighter'
}
