import React from 'react';
import styled from 'styled-components';


const StyledGameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border-radius: ${(props) => props.borderRadius || '10px'};
  padding: ${(props) => props.padding || '20px'};
  margin: ${(props) => props.margin || '10px'};
  box-shadow: ${(props) => props.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.2s;
  width: ${(props) => props.width || '5px'};

  &:hover {
    transform: scale(1.05);
  }
`;

const GameCard = ({ css, children, ...props }) => {
  return (
    <StyledGameCard {...css} {...props}>
      {children}
    </StyledGameCard>
  );
};

export default GameCard;

