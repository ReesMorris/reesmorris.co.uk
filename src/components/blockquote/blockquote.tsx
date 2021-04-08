import React from 'react';
import Styles from './blockquote.styles';

interface BlockquoteProps {
  children: React.ReactNode;
}

const Blockquote = ({ children }: BlockquoteProps) => {
  return <Styles.Blockquote>{children}</Styles.Blockquote>;
};
export default Blockquote;
