import React from 'react';
import Styles from './blockquote.styles';

interface BlockquoteProps {
  children: React.ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return <Styles.Blockquote>{children}</Styles.Blockquote>;
};
export default Blockquote;
