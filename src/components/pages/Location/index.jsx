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
  MDBBtn,
  MDBInput,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './location.scss';

class LocationPage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Wo Du uns findest";
  }

  render() {

    const { globalStore } = this.props;

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API;
  
    return (
      <div id="location">
      <MDBContainer className="py-5">
        <h2 className="text-center">Wo Du uns findest</h2>
        <MDBRow className="mt-5">
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard className="text-center text-sm-left">
              <MDBCardBody>
                <h3 className="mt-2">
                  Fragen?
                </h3>
                <Link to="/faq">
                  <MDBBtn
                  color="blue"
                  className="ml-0 mr-0"
                  rounded
                  >
                  <MDBIcon icon="question" className="pr-2"/>
                  FAQ
                  </MDBBtn>
                </Link>
                <h3 className="mt-2">
                  Schreib uns
                </h3>
                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Dein Name"
                    iconClass="grey-text"
                    type="text"
                    outline
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Deine E-Mail"
                    iconClass="grey-text"
                    type="email"
                    outline
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Nachricht"
                    iconClass="grey-text"
                    type="textarea"
                    outline
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn 
                  color={globalStore.mode ? "white" : "light"}
                  >
                  <MDBIcon far icon="paper-plane" className="pr-2"/>
                  Submit
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuZmolFGAcEcRCu40kRxAfow&key=${apiKey}`}
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p>Emailwerkstraße 29<br/>9523 Villach</p>
                <p className="mb-md-0">Kärnten, AT</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 43 681 205 027 54</p>
                <p className="mb-md-0">Mon - Son, 9:00-20:00<br/><small>auch Sonn- und Feiertags</small></p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>contact@aichner-christian.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

export default LocationPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
