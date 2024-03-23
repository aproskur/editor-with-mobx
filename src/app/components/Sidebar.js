import React from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const StyledSidebar = styled.div`
  height: 100vh;
  width: 5%;
  top: 0;
  color: var(--clr-theme-yellow);
  border-right: 1px solid var(--clr-theme-yellow-02);
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s, position 0.3s;
  overflow: hidden;
  background: inherit;
`;

export default function Sidebar({ onToggleClick }) {
    return (
        <StyledSidebar>
            <div className="content-container">
                <ToggleButton onClick={onToggleClick} />

            </div>
        </StyledSidebar>
    );
}
