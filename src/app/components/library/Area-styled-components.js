
import React from 'react';
import styled from 'styled-components';

const StyledGameArea = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'start'};
  padding: ${props => props.padding || '1rem'};
  margin: ${props => props.margin || '0'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: ${props => props.borderRadius || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

const GameArea = ({ css, children }) => {
    return <StyledGameArea {...css}>{children}</StyledGameArea>;
};

export default GameArea;
