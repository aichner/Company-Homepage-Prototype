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

//> Images
// Working svg
import { ReactComponent as Working } from  '../../../../assets/content/hero/working.svg';

//> Settings
const optionsRadar = {
  responsive: true,
  elements: {
    line: {
      tension: 0.2
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

class Hero extends React.PureComponent {

  state = {
    valuesRadar: undefined
  }

  componentDidMount = () => {
    // First time
    if(!this.state.valuesRadar){
      this.setState({ valuesRadar: this.generateRandom() });
    }
    // Every 1 sec
    this.interval = setInterval(() => this.setState({ valuesRadar: this.generateRandom() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateRandom = () => {
    let min = Math.ceil(10);
    let max = Math.floor(100);

    let arr = [1, 2, 3, 4, 5, 6];

    let results = arr.map((item, i) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });

    return results;
  }

  getRadarData = () => {
    return {
      labels: [
        "Website",
        "Social Media",
        "Branding",
        "Image",
        "Marketing",
        "Security"
      ],
      datasets: [
        {
          backgroundColor: "rgba(246, 26, 66, 0.5)",
          borderColor: "rgb(246, 26, 66)",
          data: this.state.valuesRadar
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
        <MDBContainer fluid id="seperator" className="d-sm-block d-none text-dark">
          <MDBContainer>
            <MDBRow className="h-100">
              <MDBCol md="3" className="p-0">
                <Radar 
                data={this.getRadarData}
                options={optionsRadar}
                />
              </MDBCol>
              <MDBCol md="7" className="p-0">
                <h3>Was taugt Deine Online-Präsenz?</h3>
                <p className="lead">
                Unsere <strong>kostenlose</strong> Analyse zeigt Dir den aktuellen Stand 
                Deiner gesamten Online-Präsenz und liefert individuelle und unkomplizierte Lösungen.
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
