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
import './privacyme.scss';

class PrivacyMePage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Meine Daten";
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <div id="privacyme">
      <MDBContainer className="py-5 text-center">
        lel
      </MDBContainer>
      </div>
    );
  }
}

export default PrivacyMePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
