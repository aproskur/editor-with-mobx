import React from 'react';
import styled from 'styled-components';


const StyledGameScreen = styled.div`
  display: ${(props) => props.display || 'flex'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => props.backgroundColor || '#fff'}
`;

const GameScreen = ({ css, ...props }) => {
    return (
        <StyledGameScreen {...css}>
            {props.children}
        </StyledGameScreen>
    );
};

export default GameScreen;
