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
                                    Mehr erfahren<MDBIcon icon="angle-down" className="pl-2" />
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md="6" className="py-5">
                                    <Working />
                                </MDBCol>
                            </MDBRow>
                        </MDBView>
                    </MDBContainer>
                </div>
                <MDBContainer fluid id="seperator">
                    <MDBContainer>
                        <MDBRow className="h-100 flex-center">
                            <MDBCol>
                                <h3>Egal ob Website, Print, SEO oder Imagefilm</h3>
                                <h2 className="font-weight-bold pl-4">Wir sind Ihr Allround-Partner</h2>
                                <h2 className="red-text font-weight-bold pl-4">in Sachen Marketing</h2>
                                <h2>Ein Partner für Ihr gesamtes Marketing!</h2>
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
