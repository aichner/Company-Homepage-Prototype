//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Router Link
import { Link } from 'react-router-dom';

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

//> CSS
import './services.scss';

//> Images
// Working svg
import webIMG from '../../../../assets/content/services/web.png';
import adIMG from '../../../../assets/content/services/ad.png';
import imageIMG from '../../../../assets/content/services/image.png';

//> Data
const data = {
  services: [
    {
      title: "Webdesign und Entwicklung",
      img: webIMG,
      lead: "Bla bla bla",
      text: "Bla bla bla wieso eine Homepage wichtig ist.",
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/online-presence",
      }
    },
    {
      title: "Werbefilm",
      img: adIMG,
      lead: "Auch die tollsten Produkte benötigen Marketing!",
      text: `Ein Werbefilm ist der perfekte Weg zu einer höheren Bekanntheit und 
      dadurch zu garantiert mehr Umsatz.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/ads",
      }
    },
    {
      title: "Imagefilm",
      img: imageIMG,
      lead: "Setzen Sie Ihr Unternehmen professionell ins Bild.",
      text: `Mit einem Imagefilm erhalten Sie ein Video, welches Sie vielseitig und 
      auf allen Plattformen einsetzen können.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/ads",
      }
    }
  ]
};

class Services extends React.PureComponent {

  render() {
    
    const { globalstore } = this.props;

    return (
      <div id="services">
        <MDBContainer className="py-5 text-center">
            <h2 className="gidole h1-responsive font-weight-bold">
              Dein Nutzen
            </h2>
            <p className="lead">
            Wir bieten Dir <strong>hochwertige</strong>, auf Deine Vision zugeschnittene Lösungen in sämtlichen 
            Bereichen des Marketings.
            </p>
            <MDBRow className="mt-5">
              {data.services.map((service, i) => {
                return(
                  <MDBCol md="4" key={i}>
                    <img src={service.img} className="img-fluid" alt={service.title}/>
                    <h4 className="font-weight-bold mt-3">
                    {service.title}
                    </h4>
                    <p className="lead">
                      {service.lead}
                    </p>
                    <p>
                      {service.text}
                    </p>
                    <Link to={service.action.link}>
                      <MDBBtn
                      color={service.action.color}
                      rounded
                      >
                      {service.action.text}
                      </MDBBtn>
                    </Link>
                  </MDBCol>
                );
              })}
            </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Services;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
