import React from 'react';

import './assets/css/app.css';

import MainContent from './components/layout/Main';
import Sidebar from './components/layout/sidebar/Sidebar';
import Rightmenu from './components/layout/Rightmenu';
import Leftmenu from './components/layout/Leftmenu';
import Navigation from './components/layout/navigation/Navigation';

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
