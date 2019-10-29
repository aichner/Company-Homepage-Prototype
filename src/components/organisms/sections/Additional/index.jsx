//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBContainer,
} from 'mdbreact';

//> Images
// Temp - to be replaced with downloaded
const img1 = "https://as1.ftcdn.net/jpg/02/65/21/80/500_F_265218003_iP6Sapz67XC26uHRVs9Cwv4YmPpGeuRD.jpg";
const img2 = "https://as1.ftcdn.net/jpg/00/87/40/60/500_F_87406008_TW00pTuvpbHANUzvbGgJ5Dott96yUdXo.jpg";
const img3 = "https://as2.ftcdn.net/jpg/01/98/32/37/500_F_198323720_pDr2Ud2dn6MLi4t84QBYarxFPq5tnHbS.jpg";

class Weddings extends React.Component {
    render() {
        const { globalstore } = this.props;
        return (
            <section id="weddings" className={globalstore.mode ? ("dark") : ("light")}>
                <MDBContainer>
                    <h2 className="gidole h1-responsive text-center font-weight-bold">
                    Hast Du schon gewusst, dass wir...
                    </h2>
                    <MDBRow className="flex-center text-center">
                    <MDBCol md="6">
                            <h2>... Meetinglocations mit Dir teilen</h2>
                            <p className="my-3">
                            Bist Du auf der Suche nach einer <strong>modernen</strong> und 
                            <strong>passenden</strong> Meetinglocation? Wir stellen Dir 
                            unsere Räumlichkeiten für Besprechungen gerne zur Verfügung.
                            </p>
                            <MDBBtn 
                            color="agency-red"
                            className=""
                            >
                            <MDBIcon far icon="calendar-check" className="pr-2" />Jetzt buchen
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="6">
                        <img
                        className="img-fluid"
                        src={img1}
                        alt=""
                        />
                        </MDBCol>
                        <MDBCol md="6">
                            <img
                            className="img-fluid"
                            src={img2}
                            alt=""
                            />
                        </MDBCol>
                        <MDBCol md="6">
                            <h2>... Hochzeiten filmen und fotografieren</h2>
                            <p className="my-3">
                            Wir halten den wohl schönten Tag Deines Lebens <strong>professionell</strong> 
                            und <strong>unkompliziert</strong> auf Video und Photo individuell für Dich fest.
                            </p>
                            <button className="btn-fancy ml-auto mr-auto mt-4">
                                Meine Hochzeit
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                            </button>  
                        </MDBCol>
                        <MDBCol md="6">
                            <h2>... Tutorials anbieten</h2>
                            <MDBBtn
                            social="yt"
                            href="https://www.youtube.com/channel/UCgiTWA1uLFvyFZTi_hWapnw"
                            target="_blank"
                            ><MDBIcon fab icon="youtube" className="pr-2" />
                            YouTube
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol md="6">
                        <img
                        className="img-fluid"
                        src={img3}
                        alt=""
                        />
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
