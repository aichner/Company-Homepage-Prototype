//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraries
// Parallax
import { Parallax } from 'react-scroll-parallax';
// Fade-In animation
import FadeIn from 'react-fade-in';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBIcon,
    MDBMask,
    MDBContainer,
} from 'mdbreact';

//> Images
// To be added

class Weddings extends React.Component {
    render() {
        return (
            <section id="weddings" className={this.props.globalStore.mode ? ("dark") : ("light")}>
                <MDBContainer>
                    <h2 className="gidole h1-responsive">Hast Du schon gewusst, dass wir...</h2>
                    <MDBRow>
                    <MDBCol md="6">
                        <h2>... Hochzeiten filmen</h2>
                    </MDBCol>
                    <MDBCol md="6">
                        <button class="btn-fancy">
                            Meine Hochzeit
                            <div class="button__horizontal"></div>
                            <div class="button__vertical"></div>
                        </button>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default Weddings;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
