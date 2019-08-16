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
  MDBInput,
  MDBMask,
} from 'mdbreact';

//> Images
// Parallax layers
import layer1 from '../../../../assets/bg/l1.png';
import layer2 from '../../../../assets/bg/l2.png';
import layer3 from '../../../../assets/bg/l3.png';
import layer4 from '../../../../assets/bg/l4.png';
// Logo
import layerLogo from '../../../../assets/bg/logo.png';
// Content (services)
import concept from '../../../../assets/content/hero/concept.jpg';
import design from '../../../../assets/content/hero/design.jpg';
import events from '../../../../assets/content/hero/events.jpg';
import identity from '../../../../assets/content/hero/identity.jpg';
import web from '../../../../assets/content/hero/web.jpg';
import wedding from '../../../../assets/content/hero/wedding.jpg';

class Hero extends React.Component {

    render() {
        return (
        <div id="hero">
                <MDBView className="hero-view">
                    <ParallaxBanner
                    className="hero-parallax"
                    layers={[
                        {
                            image: layer4,
                            amount: 0.8,
                            expanded: false
                        },
                        {
                            image: layer3,
                            amount: 0.7,
                            expanded: false
                        },
                        {
                            image: layer2,
                            amount: 0.4,
                            expanded: false
                        },
                        {
                            image: layer1,
                            amount: 0.1,
                            expanded: false
                        }
                    ]}
                    >
                        <MDBContainer>
                            <MDBRow className="h-100">
                                <MDBCol md="6">
                                    <Parallax y={[20, -20]} tagOuter="figure">
                                        <div className="white-text text-center text-md-left mt-xl-5 mb-5">
                                            <FadeIn>
                                            <MDBView>
                                                <img src={layerLogo} className="m-auto img-fluid" alt="Logo"/>
                                                <MDBMask className="flex-center">
                                                </MDBMask>
                                            </MDBView>
                                            </FadeIn>
                                            <FadeIn>
                                            <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                                Ihre Vision ist unser Auftrag.{" "}
                                            </h1>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                                veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                                molestiae iste.
                                            </h6>
                                            <MDBBtn color="white">Was wir bieten</MDBBtn>
                                            <MDBBtn outline color="warning">
                                                <MDBIcon icon="paper-plane" className="pr-2" />Kontakt
                                            </MDBBtn>
                                            </FadeIn>
                                        </div>
                                    </Parallax>
                                </MDBCol>
                                <MDBCol md="6" className="d-none d-md-flex d-lg-flex">
                                    <FadeIn>
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="z-depth-2 white-text">
                                        <h3 className="text-center">
                                            Was suchen Sie?
                                        </h3>
                                        <hr className="hr-light" />
                                        <FadeIn>
                                        <MDBRow className="services d-none d-md-none d-lg-flex" >
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/online-presence">
                                                    <MDBView>
                                                        <img src={web} alt="Web" className="img-fluid" />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Website<br/>
                                                            <span>oder</span><br/>
                                                            <span>Webapp, Webshop, Blog</span></p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/events">
                                                    <MDBView>
                                                        <img src={events} alt="Events" className="img-fluid" />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Eventfotografie<br/>
                                                            <span>oder</span><br/>Eventvideo</p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/identity">
                                                    <MDBView>
                                                        <img
                                                        src={identity}
                                                        alt="Corporate identity"
                                                        className="img-fluid"
                                                        />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Corporate Identity</p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/wedding">
                                                    <MDBView>
                                                        <img src={wedding} alt="Wedding" className="img-fluid" />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Ihre Hochzeit</p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/concept">
                                                    <MDBView>
                                                        <img src={concept} alt="Concept" className="img-fluid" />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Webdesign<br/>
                                                            <span>und</span><br/>Konzept
                                                            </p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <figure>
                                                    <Link to="services/design">
                                                    <MDBView>
                                                        <img src={design} alt="Design" className="img-fluid" />
                                                        <MDBMask className="flex-center" overlay="black-strong">
                                                            <p className="white-text">Grafik Design</p>
                                                        </MDBMask>
                                                    </MDBView>
                                                    </Link>
                                                </figure>
                                            </MDBCol>
                                        </MDBRow>
                                        </FadeIn>
                                        <div className="text-center mt-4">
                                            <MDBBtn color="white">Alle Leistungen</MDBBtn>
                                        </div>
                                        <div className="text-center mt-4 black-text">
                                            <hr className="hr-light" />
                                            <div className="text-center d-flex justify-content-center white-label">
                                            <a href="#!" className="p-2 m-2">
                                                <MDBIcon fab icon="twitter" className="white-text" />
                                            </a>
                                            <a href="#!" className="p-2 m-2">
                                                <MDBIcon fab icon="linkedin-in" className="white-text" />
                                            </a>
                                            <a href="#!" className="p-2 m-2">
                                                <MDBIcon fab icon="instagram" className="white-text" />
                                            </a>
                                            </div>
                                        </div>
                                        </MDBCardBody>
                                        
                                    </MDBCard>
                                    </FadeIn>
                                </MDBCol>
                                
                            </MDBRow>
                            
                        </MDBContainer>
                    </ParallaxBanner>
                </MDBView>
            </div>
        );
    }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
