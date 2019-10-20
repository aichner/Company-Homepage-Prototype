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
import { ReactComponent as Logo } from  '../../../assets/content/logo_full.svg';
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
                <Logo className="logo-light"/>
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
        <MDBRow className="mt-5">
          <MDBCol md="6">
            <p className="lead font-weight-bold">Mach diese tollen Dinge</p>
            <ul>
              <li>
                <p className="mt-2">
                  <MDBIcon icon="check" className="green-text pr-2" />
                  Verwende unser Logo um auf uns zu verlinken
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="check" className="green-text pr-2" />
                  Verwende unser Logo in Deinem Blog oder Nachrichtenartikel über uns
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="check" className="green-text pr-2" />
                  Verwende unser Logo um auf Zusammenarbeit hinzuweisen
                </p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <p className="lead font-weight-bold">Bitte tu diese Dinge nicht</p>
            <ul>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Verwendung des Logos für eigene Zwecke
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Erstellung einer abgeänderten / modifizierten Version des Logos
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Einbettung des Logos in Dein eigenes Logo
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Verwendung jeglicher Schaffungen der Agentur ohne Erlaubnis
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Verkauf jeglicher Schaffungen der Agentur ohne Erlaubnis
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Jegliche Veränderung des Logos (z.B. Farben, Maße, Text, ...)
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="times" className="red-text pr-2" />
                  Einbettung des Logos auf unpassendem Hintergrund (z.B. Dunkles Logo auf dunklem Hintergrund)
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol md="6">
            <p className="lead font-weight-bold">Bitte kontaktiere uns</p>
            <p>wenn Du unsere Schaffungen verwenden willst oder Du diese in einem Video oder 
            Mainstream-Medien verwenden willst.</p>
            <MDBBtn
            color="elegant"
            size="md"
            rounded
            tag="a"
            href="mailto:contact@aichner-christian.com"
            >
              Kontakt
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6">
            <p className="lead font-weight-bold">Du willst über uns berichten?</p>
            <p>Nutze gerne unsere Ressourcen unter Berücksichtung der oben angeführten Regeln.</p>
            <p className="lead font-weight-bold">Du benötigst Auskunft?</p>
            <p>Über firmeninterne Details können wir Dir für deinen Bericht / Blog / Artikel gerne Auskunft geben.</p>
            <MDBBtn
            color="elegant"
            size="md"
            rounded
            tag="a"
            href="mailto:contact@aichner-christian.com"
            >
              Kontakt
            </MDBBtn>
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
