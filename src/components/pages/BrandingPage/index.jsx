//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';

class BrandingPage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <h2 className="text-center">Logos und Verwendung</h2>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <p>Test</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  }
}

export default BrandingPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
