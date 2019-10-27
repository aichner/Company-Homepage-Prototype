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
} from 'mdbreact';

//> CSS
import './about.scss';

class AboutPage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Wo Du uns findest";
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <div id="location">
      <MDBContainer className="py-5">
        <h2 className="text-center">Impressum</h2>
      </MDBContainer>
      </div>
    );
  }
}

export default AboutPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
