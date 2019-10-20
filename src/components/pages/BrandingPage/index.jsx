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
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './branding.scss';

//> Images
// Logo
import { ReactComponent as Logo } from  '../../../assets/content/logo_main.svg';
// Weddings logo
import weddingsLogo from '../../../assets/content/weddings.png';

class BrandingPage extends React.Component {
  render() {
    return (
      <MDBContainer id="branding" className="py-5">
        <h2 className="text-center mb-5">Logos und Verwendung</h2>
        <MDBRow className="text-center">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <p className="lead">Logo (on light)</p>
                <Logo />
                <div>
                  <MDBBtn
                  color="elegant"
                  rounded
                  >
                  <MDBIcon icon="download" className="pr-2" />
                  .svg
                  </MDBBtn>
                  <MDBBtn
                  color="elegant"
                  rounded
                  >
                  <MDBIcon icon="download" className="pr-2" />
                  .png
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody className="elegant-color white-text">
                <p className="lead">Logo (on dark)</p>
                <Logo className="logo-dark"/>
                <div>
                  <MDBBtn
                  color="white"
                  rounded
                  >
                  <MDBIcon icon="download" className="pr-2" />
                  .svg
                  </MDBBtn>
                  <MDBBtn
                  color="white"
                  rounded
                  >
                  <MDBIcon icon="download" className="pr-2" />
                  .png
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody className="elegant-color white-text">
                <p className="lead">Wedding Logo (universal)</p>
                <img className="img-fluid" src={weddingsLogo} alt="Weddings logo"/>
                <div>
                  <MDBBtn
                  color="white"
                  rounded
                  >
                  <MDBIcon icon="download" className="pr-2" />
                  .png
                  </MDBBtn>
                </div>
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
