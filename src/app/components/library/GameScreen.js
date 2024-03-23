import React from 'react';

const GameScreen = ({ style, children, ...props }) => {
    const defaultStyles = {
        display: 'flex',
        height: 'auto',
        width: '100%',
        backgroundColor: '#fff',
    };

    const combinedStyles = { ...defaultStyles, ...style };

    return (
        <div style={combinedStyles} {...props}>
            {children}
        </div>
    );
};

export default GameScreen;
