//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Links (replaces <a> tags)
import { Link } from 'react-router-dom'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from 'mdbreact';

//> CSS
import './faq.scss';

class FaqPage extends React.Component {

  // Init this.state
  state = {}

  componentDidMount = () => {
    // Set page title
    document.title = "Meine Daten";

    // Check states
    let cookies = localStorage.getItem('cookie');
    this.setState({
      cookies: cookies === "true" ? true : false,
    });
  }

  activateDarkMode = () => {
    localStorage.setItem('mode',true);
    this.props.handler();
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <div id="faq">
      <MDBContainer className="py-5 text-center">
        <div>
          <h2>Hi! Wie können wir Dir helfen?</h2>
          <div className="active-cyan-3 active-cyan-4 mb-4 pl-sm-5 pr-sm-5">
            <input 
            className="form-control"
            type="text"
            placeholder="Suche"
            aria-label="Suche"
            />
          </div>
          <hr/>
        </div>
      </MDBContainer>
      </div>
    );
  }
}

export default FaqPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
