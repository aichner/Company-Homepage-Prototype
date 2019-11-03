//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraries
// Charts
import { Radar } from "react-chartjs-2";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './services.scss';

//> Images
// Working svg
import { ReactComponent as Working } from  '../../../../assets/content/hero/working.svg';

class Services extends React.PureComponent {

  render() {
    
    const { globalstore } = this.props;

    return (
      <div id="services">
        <MDBContainer className="py-5">
            <h2 className="gidole h1-responsive text-center font-weight-bold">
              Dein Nutzen
            </h2>
        </MDBContainer>
      </div>
    );
  }
}

export default Services;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
