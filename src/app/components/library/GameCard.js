import React from 'react';

const GameCard = ({ style, children, ...props }) => {

  const defaultStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    width: '300px'
  };

  // Merge default styles with custom styles
  const combinedStyles = { ...defaultStyles, ...style };

  return (
    <div style={combinedStyles} {...props}>
      {children}
    </div>
  );
};

export default GameCard;
