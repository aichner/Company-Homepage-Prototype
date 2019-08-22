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
                    <h2 className="gidole h1-responsive text-center font-weight-bold">Hast Du schon gewusst, dass wir...</h2>
                    <MDBRow className="flex-center text-center">
                    <MDBCol md="6">
                            <h2>... Meetinglocations günstig vermieten</h2>
                            <p className="my-3">Bist Du auf der Suche nach einer <strong>modernen</strong> und <strong>passenden</strong> Meetinglocation? Wir stellen Dir unsere Räumlichkeiten für Besprechungen gerne zur Verfügung.</p>
                            <MDBBtn color="agency-red" className=""><MDBIcon far icon="calendar-check" className="pr-2" />Jetzt buchen</MDBBtn>
                        </MDBCol>
                        <MDBCol md="6">
                        <img className="img-fluid" src="https://as1.ftcdn.net/jpg/02/65/21/80/500_F_265218003_iP6Sapz67XC26uHRVs9Cwv4YmPpGeuRD.jpg" alt=""/>
                        </MDBCol>
                        <MDBCol md="6">
                            <img className="img-fluid" src="https://as1.ftcdn.net/jpg/00/87/40/60/500_F_87406008_TW00pTuvpbHANUzvbGgJ5Dott96yUdXo.jpg" alt=""/>
                        </MDBCol>
                        <MDBCol md="6">
                            <h2>... Hochzeiten filmen und fotografieren</h2>
                            <p className="my-3">Wir halten den wohl schönten Tag Deines Lebens <strong>professionell</strong> und <strong>unkompliziert</strong> auf Video und Photo individuell für Dich fest.</p>
                            <button class="btn-fancy ml-auto mr-auto mt-4">
                                Meine Hochzeit
                                <div class="button__horizontal"></div>
                                <div class="button__vertical"></div>
                            </button>  
                        </MDBCol>
                        <MDBCol md="6">
                            <h2>... Tutorials anbieten</h2>
                            <MDBBtn color="blue" className=""><MDBIcon fab icon="docker" className="pr-2" />Docker</MDBBtn>
                            <MDBBtn color="orange" className=""><MDBIcon fab icon="html5" className="pr-2" />HTML</MDBBtn>
                            <MDBBtn color="info"><MDBIcon fab icon="react" className="pr-2" />React</MDBBtn>
                            <hr />
                            <MDBBtn color="dark" outline><MDBIcon icon="camera" className="pr-2" />Fotografie</MDBBtn>
                            <MDBBtn color="dark" outline><MDBIcon icon="video" className="pr-2" />Video</MDBBtn>
                        </MDBCol>
                        <MDBCol md="6">
                        <img className="img-fluid" src="https://as2.ftcdn.net/jpg/01/98/32/37/500_F_198323720_pDr2Ud2dn6MLi4t84QBYarxFPq5tnHbS.jpg" alt=""/>
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
