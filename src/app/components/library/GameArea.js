
import React from 'react';
import styled from 'styled-components';



const GameArea = ({ css, children }) => {
  return <div {...css}>{children}</div>;
};

export default GameArea;
