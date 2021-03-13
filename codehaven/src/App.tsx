import React from 'react';

import './assets/css/app.css';

import MainContent from './components/Main';
import Sidebar from './components/Sidebar';
import Rightmenu from './components/RightMenu';
import Leftmenu from './components/Leftmenu';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Sidebar />
      <Leftmenu />
      <MainContent />
      <Rightmenu />
    </div>
  );
}

export default App;
