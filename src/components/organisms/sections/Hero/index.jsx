//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Links (replaces <a> tags)
import { Link } from 'react-router-dom'

//> Additional libraries
// Parallax
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
// Fade-In animation
import FadeIn from 'react-fade-in';
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
  MDBCard,
  MDBCardBody,
  MDBMask,
} from 'mdbreact';

//> Images
// Parallax layers
import { ReactComponent as Curve } from  '../../../../assets/bg/title-curve.svg';
import { ReactComponent as Working } from  '../../../../assets/content/hero/working.svg';
import layer1 from '../../../../assets/bg/l1.png';
import layer2 from '../../../../assets/bg/l2.png';
import layer3 from '../../../../assets/bg/l3.png';
import layer4 from '../../../../assets/bg/l4.png';
// Logo
//import { ReactComponent as Logo } from  '../../../../assets/content/logo_full.svg';
// Content (services)
import concept from '../../../../assets/content/hero/concept.jpg';
import design from '../../../../assets/content/hero/design.jpg';
import events from '../../../../assets/content/hero/events.jpg';
import identity from '../../../../assets/content/hero/identity.jpg';
import web from '../../../../assets/content/hero/web.jpg';
import wedding from '../../../../assets/content/hero/wedding.jpg';

class Hero extends React.Component {

  state = {
    optionsRadar: {
        responsive: true,
        elements: {
          line: {
            tension: 0
          }
        },
        legend: {
          display: false,
        },
        scale: {
          ticks: {
            beginAtZero: true,
            display: false,
            max: 100,
            min: 0,
            stepSize: 20
          }
        },
        scales: {
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                beginAtZero: true,
                display: false,
              }
            }]
        }
    }
  }

  getRadarData = () => {
    return {
      labels: [
        "Website",
        "Social Media",
        "Branding",
        "Image",
        "Marketing",
        "Facebook"
      ],
      datasets: [
        {
          backgroundColor: "rgba(246, 26, 66, 0.5)",
          borderColor: "rgb(246, 26, 66)",
          data: [65, 59, 33, 70, 56, 55]
        }
      ]
    };
  }

  render() {
    
    const { globalstore } = this.props;

    return (
      <>
        <div id="hero" className={globalstore.mode ? ("dark") : ("light")}>
          <MDBContainer className="py-5">
            <MDBView className="hero-view">
              <MDBRow className="flex-center text-white">
                <MDBCol md="6">
                  <h1
                  className="font-weight-bold pb-4">
                  Ihre Vision ist unser Auftrag.
                  </h1>
                  <MDBBtn size="lg" color="white">
                  Mehr erfahren
                  <MDBIcon icon="angle-down" className="pl-2" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="6" className="py-5">
                  <Working />
                </MDBCol>
              </MDBRow>
            </MDBView>
          </MDBContainer>
        </div>
        <MDBContainer fluid id="seperator" className="d-sm-block d-none">
          <MDBContainer>
            <MDBRow className="h-100">
              <MDBCol md="3">
                <Radar 
                data={this.getRadarData}
                options={this.state.optionsRadar}
                />
              </MDBCol>
              <MDBCol md="7">
                <h3>Was taugt ihre Online-Präsenz?</h3>
                <p className="lead">
                Unsere <strong>kostenlose</strong> Analyse zeigt Ihnen den aktuellen Stand 
                Ihrer gesamten Online-Präsenz und liefert individuelle und unkomplizierte Lösungen.
                </p>
                <MDBBtn size="lg" color="agency-red" className="btn-start">
                  <MDBIcon icon="rocket" className="pr-2" />
                  JETZT kostenlos herausfinden
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </>
    );
  }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
