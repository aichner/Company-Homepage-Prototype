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


class CallToAction extends React.Component {
    render() {
        return (
            <div id="calltoaction" className={this.props.globalStore.mode ? ("dark") : ("light")}>
                <MDBRow>
                    <MDBCol className="text-center">
                        <h2 className="gidole">Es ist einfach zu starten!</h2>
                        <p>Und der Einstieg ist kostenlos. Zwei Dinge die jeder liebt.</p>
                        <MDBBtn color="agency-red" size="lg">Jetzt starten</MDBBtn>
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
