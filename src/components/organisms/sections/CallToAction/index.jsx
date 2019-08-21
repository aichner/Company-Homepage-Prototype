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
// Rocket
import rocket from '../../../../assets/content/icons/rocket.png';
import rocket_pen from '../../../../assets/content/icons/rocket_pen.png';
import planet1 from '../../../../assets/content/icons/planet1.jpg';


class CallToAction extends React.Component {
    render() {
        return (
            <div id="calltoaction" className={this.props.globalStore.mode ? ("dark") : ("light")}>
                <MDBRow>
                    <MDBCol className="text-center">
                        <MDBRow className="space-left">
                            <MDBCol>
                                <MDBView>
                                    <Parallax className="planet1" x={[60, 0]} tagOuter="figure">
                                        <img className="rotate" src={planet1} alt="Moon" />
                                    </Parallax>
                                <MDBMask />
                                </MDBView>
                            </MDBCol>
                            <MDBCol>
                                <MDBView>
                                    <Parallax className="rocket" y={[60, -60]} tagOuter="figure">
                                        <img className="fly" src={rocket} alt="Rocket" />
                                    </Parallax>
                                    <MDBMask />
                                </MDBView>
                            </MDBCol>
                            <MDBCol>

                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="auto" className="text-center">
                        <h2 className="gidole">Es ist einfach <strong>jetzt</strong> zu starten!</h2>
                        <p>Und der Einstieg ist kostenlos. Zwei Dinge die jeder liebt.</p>
                        <MDBBtn color="agency-red" size="lg"><MDBIcon icon="rocket" className="pr-2"/>Jetzt starten</MDBBtn>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow className="space-right">
                            <MDBCol>
                                <MDBView>
                                <Parallax className="planet2" y={[60, 0]} tagOuter="figure">
                                    <img className="rotate" src={planet1} alt="Moon" />
                                </Parallax>
                                <MDBMask />
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default CallToAction;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
