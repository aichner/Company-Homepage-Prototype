//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Links (replaces <a> tags)
import { Link } from "react-router-dom"

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
} from "mdbreact";

//> CSS
import "./request.scss";

//> Images
import requestImg from "../../../assets/content/request/request.gif";

//> Images
import { ReactComponent as SvgNoPresence } from "../../../assets/content/request/noPresence.svg";
import { ReactComponent as SvgPresence } from "../../../assets/content/request/presence.svg";

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
          <MDBCol md="4" className="px-5">
            <img 
            src={requestImg}
            alt="Companies"
            className="img-fluid"
            />
          </MDBCol>
          <MDBCol md="6" className="px-5 text-center">
            <MDBCard>
              <div className="card-title-head p-3">
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
                      <div className="text-left">
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
                        <h4 className="gidole">Glückwunsch!</h4>
                        <p className="gidole lead">
                        Bei uns bist Du richtig. Wir schaffen Dir eine <span className="underlined gidole">
                        einzigartige
                        </span> und <span className="underlined gidole">aussagekräftige</span> Online-Präsenz.
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
                        label="Social Media"
                        name="serviceSocialMedia"
                        id="serviceSocialMedia"
                        checked={this.state.serviceSocialMedia}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBInput 
                        label="Sonstiges"
                        name="serviceOther"
                        id="serviceOther"
                        checked={this.state.serviceOther}
                        onChange={this.handleCheckboxChange}
                        filled
                        type="checkbox"
                        />
                        <MDBBtn
                        color="agency-red"
                        className="mt-4"
                        >
                        Anfragen
                        </MDBBtn>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="selectYourState">
                    <p className="lead font-weight-bold gidole">
                    Hat Dein Unternehmen bereits eine Online-Präsenz?
                    </p>
                    <div>
                    <small className="text-muted">
                    Um die Online Präsenz Deines Unternehmens zu verstehen, benötigen wir einige Informationen.
                    </small>
                    </div>
                    <MDBRow className="text-center flex-center mt-4">
                      <MDBCol md="4">
                        <div className="selectType" onClick={() => this.setState({hasPresence: false})}>
                          <p className="lead">Keine Online Präsenz</p>
                          <SvgNoPresence />
                        </div>
                      </MDBCol>
                      <MDBCol md="4">
                        <div className="selectType" onClick={() => this.setState({hasPresence: true})}>
                        <p className="lead">Vorhandene Online-Präsenz</p>
                          <SvgPresence />
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>
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
