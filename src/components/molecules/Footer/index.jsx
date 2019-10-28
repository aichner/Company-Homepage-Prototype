//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Links (replaces <a> tags)
import { Link } from 'react-router-dom'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBSwitch,
    MDBBadge,
} from 'mdbreact';

//> Images
// Logo
import { ReactComponent as Logo } from  '../../../assets/content/logo_main.svg';

//> Dynamic texts
// Slogans
const slogans = [
    "Wählen Sie den Weg zum Erfolg!",
    "Erhöhen Sie Ihren Bekanntheitsgrad!",
    "Jetzt Beratungsgespräch vereinbaren!",
    "Lassen Sie sich von uns beraten!",
    "Worauf warten Sie noch?",
    "Der Erfolg wartet!"
]

class Footer extends React.PureComponent{
    state = {
        slogan: "",
    }

    // Update parent state (Root Component)
    handleSwitchChange = () => {
        this.props.handler();
    }

    // When component is ready to mount
    componentWillMount(){
        this._getSlogan();
    }

    // Get a random slogan and save to state
    _getSlogan = () => {
        this.setState({slogan: slogans[Math.floor(Math.random()*slogans.length)]});
    }

    render(){
        return(
            <MDBFooter color={this.props.mode ? ("agency-dark") : ("white text-dark")}>
                <MDBRow className="social">
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
                <MDBContainer className="text-center text-md-left pt-5">
                    <MDBRow>
                        <MDBCol md="2">
                            <Logo id="logo" />
                            <p className="mt-2">
                            Hochwertige und individuelle Lösungen
                            </p>
                            <hr/>
                            <h4>Dark Mode</h4>
                            <MDBSwitch
                            className="switch-red mb-3"
                            checked={this.props.mode}
                            onChange={this.handleSwitchChange}
                            />
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Dienste</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <Link to="/service/online-presence">
                                <li className="list-unstyled">
                                    <MDBIcon icon="globe" />Online-Präsenz
                                </li>
                            </Link>
                            <Link to="/service/events">
                                <li className="list-unstyled">
                                    <MDBIcon icon="handshake" />Events / Messen
                                </li>
                            </Link>
                            <Link to="/service/wedding">
                                <li className="list-unstyled">
                                    <MDBIcon icon="ring" />Ihre Hochzeit
                                </li>
                            </Link>
                            <Link to="/service/image">
                                <li className="list-unstyled">
                                    <MDBIcon icon="user-tie" />Ihr Image
                                </li>
                            </Link>
                            <Link to="/printing">
                                <li className="list-unstyled">
                                    <MDBIcon icon="vector-square" />3D Druck Service
                                    <MDBBadge pill color="success" className="ml-2">
                                    New
                                    </MDBBadge>
                                </li>
                            </Link>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Nützliche Links</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <Link to="/kisy">
                                <li className="list-unstyled">
                                    <MDBIcon icon="user" />Kundenportal
                                </li>
                            </Link>
                            <Link to="/faq">
                                <li className="list-unstyled">
                                    <MDBIcon icon="question" />FAQ
                                </li>
                            </Link>
                            <Link to="/dev">
                                <li className="list-unstyled">
                                    <MDBIcon icon="code" />Code quality
                                </li>
                            </Link>
                            <Link to="/coffee">
                                <li className="list-unstyled">
                                    <MDBIcon icon="coffee" />Einen Kaffee spendieren
                                </li>
                            </Link>
                            <Link to="/branding">
                                <li className="list-unstyled">
                                    <MDBIcon icon="palette" />Presse / Branding
                                </li>
                            </Link>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Kontakt</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <Link to="/location">
                                <li className="list-unstyled">
                                    <MDBIcon icon="home" />Villach, Kärnten, AT
                                </li>
                            </Link>
                            <a href="mailto:info@aichner-christian.com">
                                <li className="list-unstyled">
                                    <MDBIcon far icon="envelope" />info@aichner-christian.com
                                </li>
                            </a>
                            <a href="tel:004368120502754">
                                <li className="list-unstyled">
                                    <MDBIcon icon="phone" />+43 681 205027 54
                                </li>
                            </a>
                            <hr />
                            <Link to="/about">
                                <li className="list-unstyled">
                                    <MDBIcon far icon="file-alt" />Impressum
                                </li>
                            </Link>
                            <Link to="/privacy">
                                <li className="list-unstyled">
                                    <MDBIcon icon="balance-scale" />Datenschutzerklärung
                                </li>
                            </Link>
                            </ul>
                        </MDBCol>
                        <MDBCol md="12" className="text-center my-5">
                            <h4>{this.state.slogan}</h4>
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
