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
} from 'mdbreact';

//> CSS
import './request.scss';

//> Images
import requestImg from '../../../assets/content/request/request.gif';

class LoginPage extends React.Component {

  // Init state
  state = {
    fullname: "",
    email: "",
    company: "",
    hasPresence: null,
    serviceWebsite: false,
    serviceWebshop: false,
    serviceImagefilm: false,
    serviceFotografie: false,
    serviceSocialMedia: false,
  }

  componentDidMount = () => {
    // Set page title
    document.title = "Was taugt Deine Online Präsenz?";
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCheckboxChange = (e) => {
    console.log("Reached");
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div id="request">
      <MDBContainer className="py-5" fluid>
        <MDBRow className="flex-center">
          <MDBCol md="6" className="px-5">
            <img 
            src={requestImg}
            alt="Companies"
            className="img-fluid"
            />
          </MDBCol>
          <MDBCol md="4" className="px-5">
            <MDBCard>
              <div className="card-title-head p-3 text-center">
                <h2 className="gidole">Jetzt kostenlose Analyse</h2>
              </div>
              <MDBCardBody className="py-4">
                {this.state.hasPresence !== null ? (
                  <>
                    {this.state.hasPresence ? (
                      <>
                        <p 
                        className="text-muted mb-3"
                        >
                        <span
                        className="clickable"
                        onClick={() => this.setState({hasPresence: null})}
                        >
                        <MDBIcon icon="angle-left" className="pr-2"/>Zurück
                        </span>
                        </p>
                        <MDBInput
                        type="text"
                        name="company"
                        size="lg"
                        label="Unternehmen"
                        value={this.state.company}
                        onChange={this.handleChange}
                        outline
                        />
                        <MDBInput
                        type="text"
                        name="fullname"
                        size="lg"
                        label="Voller Name"
                        value={this.state.fullname}
                        onChange={this.handleChange}
                        outline
                        />
                        <MDBInput
                        type="email"
                        name="email"
                        size="lg"
                        label="E-Mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                        outline
                        />
                        <MDBBtn
                        color="agency-red"
                        >
                        Anfragen
                        </MDBBtn>
                      </>
                    ) : (
                      <>
                        <p 
                        className="text-muted mb-3"
                        >
                        <span
                        className="clickable"
                        onClick={() => this.setState({hasPresence: null})}
                        >
                        <MDBIcon icon="angle-left" className="pr-2"/>Zurück
                        </span>
                        </p>
                        <p>
                        Wir schaffen Dir eine <strong>einzigartige</strong> und <strong>aussagekräftige </strong>
                        Online-Präsenz für Dein Unternehmen.
                        </p>
                        <MDBInput
                        type="text"
                        name="company"
                        size="lg"
                        label="Unternehmen"
                        value={this.state.company}
                        onChange={this.handleChange}
                        outline
                        />
                        <MDBInput
                        type="text"
                        name="fullname"
                        size="lg"
                        label="Voller Name"
                        value={this.state.fullname}
                        onChange={this.handleChange}
                        outline
                        />
                        <p className="lead mb-3">Welche Services bringen Dich voran?</p>
                        <MDBInput 
                        label="Website"
                        name="serviceWebsite"
                        id="serviceWebsite"
                        checked={this.state.serviceWebsite}
                        onChange={this.handleCheckboxChange}
                        filled
                        size="lg"
                        type="checkbox"
                        />
                        <MDBInput 
                        label="Webshop"
                        name="serviceWebshop"
                        id="serviceWebshop"
                        checked={this.state.serviceWebshop}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBInput 
                        label="Imagefilm"
                        name="serviceImagefilm"
                        id="serviceImagefilm"
                        checked={this.state.serviceImagefilm}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBInput 
                        label="Fotografie"
                        name="serviceFotografie"
                        id="serviceFotografie"
                        checked={this.state.serviceFotografie}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBInput 
                        label="Social Media"
                        name="serviceSocialMedia"
                        id="serviceSocialMedia"
                        checked={this.state.serviceSocialMedia}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBBtn
                        color="agency-red"
                        >
                        Anfragen
                        </MDBBtn>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <p className="lead">
                    Hat Ihr Unternehmen bereits eine Online-Präsenz?
                    </p>
                    <MDBBtn
                    size="lg"
                    color="danger"
                    onClick={() => this.setState({hasPresence: true})}
                    >
                    <MDBIcon icon="check" className="pr-2"/>Ja
                    </MDBBtn>
                    <MDBBtn
                    size="lg"
                    color="danger"
                    onClick={() => this.setState({hasPresence: false})}
                    >
                    <MDBIcon icon="times" className="pr-2"/>Nein
                    </MDBBtn>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

export default LoginPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
