//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTimeline,
  MDBTimelineStep,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './printing.scss';

//> Images
import printImgDARK from '../../../assets/content/icons/3dprinting_dark.png';
import printImgLIGHT from '../../../assets/content/icons/3dprinting_light.png';

//> Data
const usecases = [
  "Protoypen",
  "Einzelstücke",
  "Messsemodelle",
  "Werbegeschenke",
  "Produktdesign",
  "Werkzeug- und Formenbau",
  "Forschung",
  "Architekturmodelle",
  "Ausstellmuster",
  "Konzeptmodelle",
  "Kleinersatzteile"
];

const notusecases = [
  "Medizintechnik",
  "Industrie-Fertigung",
  "Verpackungen",
  "Robuste Ersatzteile"
];

class HomePage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Ihr verlässlicher Allround-Partner";
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <MDBContainer className="py-5" id="printing">
        <h2 className="text-center mb-5">3D Druck Service</h2>
        <MDBRow className="text-center lead">
          <MDBCol md="4">
            <MDBIcon icon="check" className="green-text" />
            <div>Wir prüfen jedes Modell per Hand auf Druckbarkeit</div>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="check" className="green-text" />
            <div>Wir holen das Beste aus Deinem 3D-Druck heraus</div>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="check" className="green-text" />
            <div>Wir nehmen Kontakt auf, falls Änderungen nötig sind</div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-5">
          <MDBCol md="6">
          <img 
          src={globalStore.mode ? printImgLIGHT : printImgDARK} 
          className="img-fluid w-100 h-auto"
          alt="Man handling a 3D printer"
          />
          <h3 className="mt-4 font-weight-bold">Wir drucken Ihre Dateien</h3>
            <p>
            Durch echtzeit Druckfortschrittanzeige immer auf dem Laufenden sein! Verfolgen Sie über 
            unser Portal bequem den Fortschritt Ihres Drucks. <strong>Vom Auftragseingang bis zum 
            Versand.</strong>
            </p>

            <p className="lead font-weight-bold">Mach diese tollen Dinge</p>
            <ul>
              {usecases.map((usecase, i) => {
                return(
                  <li key={i}>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {usecase}
                    </p>
                  </li>
                )
              })}
            </ul>
            <hr />
            <p className="lead font-weight-bold">Das produzieren wir nicht</p>
            <ul>
              {notusecases.map((notusecase, i) => {
                return(
                  <li key={i}>
                    <p className="mt-2">
                      <MDBIcon icon="times" className="red-text pr-2" />
                      {notusecase}
                    </p>
                  </li>
                )
              })}
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <MDBTimeline>
              <MDBTimelineStep className="normal" color="green">
                <h4 className="font-weight-bold p-4 mb-0">
                  Auftragseingang
                </h4>
                <p className="text-muted px-4 mb-0">
                  <MDBIcon icon="clock" /> Vor 2 Stunden
                </p>
                <p className="mb-0 p-4">
                  <span className="blue-text d-block">turbine.stl</span>
                  <span className="blue-text d-block">casing.stl</span>
                </p>
              </MDBTimelineStep>
              <MDBTimelineStep inverted color="green">
                <h4 className="font-weight-bold p-4 mb-0">
                  Druckdaten Überprüfung
                </h4>
                <p className="text-muted px-4 mb-0">
                  <MDBIcon icon="clock" /> Vor 1 Stunde
                </p>
                <p className="mb-0 p-4">
                  Die Druckdaten wurden erfolgreich überpfüft.
                  <span className="blue-text d-block mt-2">
                  turbine.stl
                  <MDBIcon icon="check" className="green-text pl-2" />
                  </span>
                  <span className="blue-text d-block">
                  casing.stl
                  <MDBIcon icon="check" className="green-text pl-2" />
                  </span>
                </p>
              </MDBTimelineStep>
              <MDBTimelineStep color="blue">
                <h4 className="font-weight-bold p-4 mb-0">
                  Druck & Inspektion
                </h4>
                <p className="text-muted px-4 mb-0">
                  <MDBIcon icon="clock" /> Noch 3 Stunden
                </p>
                <p className="mb-0 p-4">
                  Ihre Dateien werden derzeit gedruckt.
                  <span className="blue-text d-block mt-2">
                  turbine.stl
                  <MDBIcon icon="check" className="green-text pl-2" />
                  </span>
                  <span className="blue-text d-block">
                  casing.stl
                  <MDBIcon icon="clock" className="blue-text pl-2" />
                  </span>
                </p>
              </MDBTimelineStep>
              <MDBTimelineStep inverted color="grey">
                <h4 className="font-weight-bold p-4 mb-0">
                  Versand oder Abholung
                </h4>
                <p className="text-muted px-4 mb-0">
                  <MDBIcon icon="clock" /> Ausstehend
                </p>
                <MDBBtn color="green" className="mt-4 w-100 m-0 mb-2">
                  <MDBIcon icon="shipping-fast" /> Lieferung
                </MDBBtn>
                <MDBBtn color="blue" className="w-100 m-0">
                  <MDBIcon icon="building" /> Abholung
                </MDBBtn>
              </MDBTimelineStep>
            </MDBTimeline>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
