//A temporary component. For testing purposes. Created for testing quill editor

import React, { useState } from 'react';

function ToggleButton({ onClick }) {
    return (
        <button onClick={onClick}>
            Toggle Quill Editor
        </button>
    );
}

export default ToggleButton;