import React from 'react';
import ReactDOM from 'react-dom/server';

interface NoScriptProps {
  children: React.ReactElement;
}

const NoScript: React.FC<NoScriptProps> = ({ children }) => {
  const staticMarkup = ReactDOM.renderToStaticMarkup(children);
  return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
};

export default NoScript;
