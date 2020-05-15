import React from 'react';

import './Content.css';

const Content = ({ tag: Tag, className, ...restProps }) => {

  return <Tag className={className} {...restProps} />;
};

Content.defaultProps = {
  tag: (props) => <div id="div-main-content">{ props.children }</div>,
};

export default Content;