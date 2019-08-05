//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';

//> Images
// Logo
//import Logo from '../../../assets/content/logow_h50.png';

//> Dynamic texts
// Slogans
const slogans = [
    "Wählen Sie den Weg zum Erfolg!",
    "Erhöhen Sie Ihren Bekanntheitsgrad!",
    "Jetzt Beratungsgespräch vereinbaren!",
    "Lassen Sie sich von uns beraten!",
    "Worauf warten Sie noch?",
    "Der Erfolg wartet hinter diesem Kontakt!",
    "Heraus aus der Komfortzone!"
]

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="agency-dark">
                <MDBRow className="agency-dark darken-1 py-3 m-0">
                    <MDBCol md="12" className="text-center">
                        <h4>Verbinden Sie sich mit uns!</h4>
                    </MDBCol>
                    <MDBCol md="12" className="text-center">
                        <MDBBtn
                        tag="a"
                        floating
                        social="git"
                        href="https://github.com/aichner"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="github fa-lg" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="ins"
                        href="https://www.instagram.com/aichnerchristian/"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="fb"
                        href="https://www.facebook.com/werbeagentur.aichner"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="facebook-f fa-lg" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="li"
                        href="https://linkedin.com/in/aichnerc"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="linkedin-in" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="tw"
                        href="https://twitter.com/realaichner"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="wa"
                        href="https://api.whatsapp.com/send?phone=4368120502754&text=Hey%2C%20ich%20bin%20interessiert%20an%20einem%20Angebot%20eurer%20Agentur."
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                            <MDBIcon fab icon="whatsapp" />
                        </MDBBtn>
                        <MDBBtn
                        tag="a"
                        floating
                        social="email"
                        href="mailto:info@aichner-christian.com"
                        >
                            <MDBIcon far icon="envelope" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBContainer className="text-center text-md-left pt-4">
                    <MDBRow>
                        <MDBCol md="2">
                            <h5>Logo</h5>
                            <p>
                            Hochwertige und individuelle Lösungen
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Dienste</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="globe" />Online-Präsenz</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="handshake" />Events / Messen</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="ring" />Ihre Hochzeit</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="user-tie" />Ihr Image</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Nützliche Links</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="user" />Kundenportal</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="question" />FAQ</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="code" />Development Roadmap</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="coffee" />Einen Kaffee spendieren</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Kontakt</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="home" />Villach, Kärnten, AT</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon far icon="envelope" />info@aichner-christian.com</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="phone" />+43 681 205027 54</a>
                            </li>
                            <hr />
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon far icon="file-alt" />Impressum</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!"><MDBIcon icon="balance-scale" />Datenschutzerklärung</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="12" className="text-center my-5">
                            <h4>{slogans[Math.floor(Math.random()*slogans.length)]}</h4>
                            <MDBBtn size="lg" rounded color="agency-red">Kontakt</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; 2017 - {new Date().getFullYear()} Copyright: Werbeagentur Christian Aichner
                        <p className="my-2 font-weight-bold gidole">
                            Made with <i className="fas fa-heart pulse red-text" aria-hidden="true"></i> by us.
                        </p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        )
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
