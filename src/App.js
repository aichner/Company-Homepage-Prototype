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
// Scroll to top (needed to start pages on the top when clicking on <Link>)
import ScrollToTop from './components/helpers/ScrollToTop.jsx';

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

// Save the mode
const mode = getMode();

// Root Component
class App extends React.Component {
  state = {
    darkmode: mode
  }

  // Handler for all child components who can set the mode
  _handler = () => {
    // Update mode for all child components and write it to localStorage
    this.setState({
      darkmode: !this.state.darkmode
    }, () => localStorage.setItem('mode', this.state.darkmode));
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={this.state.darkmode ? "flyout dark-mode" : "flyout"}>
            <Navbar mode={this.state.darkmode} />
            <main>
              <Routes mode={this.state.darkmode} handler={this._handler} />
            </main>
            <Footer handler={this._handler} mode={this.state.darkmode} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
