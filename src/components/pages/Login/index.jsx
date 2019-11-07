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
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from 'mdbreact';

//> CSS
import './login.scss';

class LoginPage extends React.Component {

  // Init state
  state = {}

  componentDidMount = () => {
    // Set page title
    document.title = "Kundenlogin";
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <MDBContainer className="py-5" id="login">
        <MDBRow className="flex-center">
          <MDBCol md="6">
            <MDBCard className="z-depth-3">
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="mb-5">
                    <strong>KISy Login</strong><br/>
                    <small>Kunden Informations System</small>
                  </h3>
                </div>
                <MDBInput
                  label="Deine E-Mail"
                  group
                  type="email"
                  name="email"
                  value={this.state.email}
                  outline
                  validate
                  onChange={(e) => {this.setState({[e.target.name]: e.target.value})}}
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Dein Passwort"
                  group
                  type="password"
                  name="password"
                  value={this.state.password}
                  outline
                  validate
                  onChange={(e) => {this.setState({[e.target.name]: e.target.value})}}
                  containerClass="mb-0"
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  <Link to="/kisy/reset" className="blue-text ml-1">
                    Forgot Password?
                  </Link>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small text-right d-flex justify-content-center mb-3 pt-2">

                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1"
                  >
                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Noch kein Kunde?
                  <a 
                  href="mailto:contact@aichner-christian.com" 
                  className="blue-text ml-1"
                  >

                    Kontakt
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
