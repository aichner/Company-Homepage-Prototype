//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Router Link
import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBIcon,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselInner,
} from 'mdbreact';

//> CSS
//import './trusted.scss';

//> Images
import kelagIMG from '../.././../../assets/content/trusted/kelag.png';

//> Data
const data = [
  kelagIMG,

];

class Trusted extends React.PureComponent {

  renderItems = () => {
    return data.map((logo, i) => {
      return(
        <>
          <MDBCol md="2">
          <img src={logo} alt="Kundenlogo" className="img-fluid" />
          </MDBCol>
        </>
      )
    });
  }

  render() {
    
    const { globalstore } = this.props;

    return (
      <div id="trusted">
        <MDBContainer className="py-5 text-center">
            <h2 className="gidole h1-responsive font-weight-bold">
              Viele Firmen profitieren von unseren Services
            </h2>
            <p className="lead">
            Wir bieten Dir <strong>hochwertige</strong>, auf Deine Vision zugeschnittene Lösungen in sämtlichen 
            Bereichen des Marketings.
            </p>
            <MDBCarousel 
            activeItem={1}
            length={3}
            slide={true}
            showControls={false}
            showIndicators={true}
            mobileGesture={true}
            multiItem
            interval={4000}
            onHoverStop={true}
            >
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                    {this.renderItems()}
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBCol md="4">
                      <p>Test4</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <p>Test5</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <p>Test6</p>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBCol md="4">
                      <p>Test7</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <p>Test8</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <p>Test9</p>
                    </MDBCol>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default Trusted;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
