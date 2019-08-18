//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { BrowserRouter as Router } from 'react-router-dom';

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import {
  Footer,
  Navbar,
} from './components/molecules';
// Routes
import Routes from './Routes';

// Check if dark or light mode
function getMode() {
    let mode = localStorage.getItem('mode');
    if(mode !== null){
      return JSON.parse(mode);
    } else {
      // Set default
      localStorage.setItem('mode', false);
      return false;
    }
}

const mode = getMode();

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar mode={mode} />
          <main>
            <Routes mode={mode} />
          </main>
          <Footer mode={mode} />
        </div>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
