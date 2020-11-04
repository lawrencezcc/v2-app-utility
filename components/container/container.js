import React from 'react';

import './style/index.module.scss';

export const Container = (props) => {
  return <div className="container">{props.component}</div>;
};
