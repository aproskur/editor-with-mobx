'use client'
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Sidebar from './components/Sidebar';
import Display from './components/Display';

const Home = observer(() => {
  const [isEditorVisible, setEditorVisibility] = useState(false);

  const handleToggleClick = () => {
    setEditorVisibility(!isEditorVisible);
  };

  return (
    <main className="app-wrapper">
      <Sidebar onToggleClick={handleToggleClick} />
      <Display isEditorVisible={isEditorVisible} />
    </main>
  );
});


export default Home
