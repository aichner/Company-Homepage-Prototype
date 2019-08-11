//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraries
// Parallax
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline
} from 'mdbreact';

//> Images
// Parallax layers
import layer1 from '../../../../assets/bg/l1.png';
import layer2 from '../../../../assets/bg/l2.png';
import layer3 from '../../../../assets/bg/l3.png';
import layer4 from '../../../../assets/bg/l4.png';
import layerLogo from '../../../../assets/bg/logo.png';

class Hero extends React.Component {

    render() {
        const overlay = (
        <div
            id="sidenav-overlay"
            style={{ backgroundColor: "transparent" }}
            onClick={this.handleTogglerClick}
        />
        );
        return (
        <div id="hero">
                <MDBView>
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
                            <MDBRow>
                                <MDBCol md="6">
                                    <Parallax y={[20, -20]} tagOuter="figure">
                                        <div className="white-text text-center text-md-left mt-xl-5 mb-5">
                                            <div className="text-center w-100">
                                                <img src={layerLogo} className="m-auto" alt="Logo"/>
                                            </div>
                                            
                                            <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                                Make purchases with our app{" "}
                                            </h1>
                                            <hr className="hr-light" />
                                            
                                            <h6 className="mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                                veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                                molestiae iste.
                                            </h6>
                                            
                                            <MDBBtn color="white">Download</MDBBtn>
                                            <MDBBtn outline color="white">
                                                Learn More
                                            </MDBBtn>
                                        </div>
                                    </Parallax>
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
