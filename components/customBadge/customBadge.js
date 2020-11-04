import React from 'react';

import './style/index.module.scss';

export const CustomBadge = (props) => {
  return <div className="c-badge">{props.text}</div>;
};
