export interface LayoutProps {
  margin?: Margin;
  padding?: Padding;
  display?: Display;
  width?: string;
  gap?: SpaceValue;
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
