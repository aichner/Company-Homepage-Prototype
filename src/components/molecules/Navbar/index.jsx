//> React
// Contains all the functionality necessary to define React components
import React from 'react';
import {withRouter} from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
    MDBSmoothScroll,
} from 'mdbreact';

//> Images
// Logo
import { ReactComponent as Logo } from  '../../../assets/content/logo_main.svg';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapseID: "",
        };
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    closeCollapse = collapseID => () => {
        window.scrollTo(0, 0);
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    };

    // Get navbar mode
    _getMode = () => {
        let opts = {};
        if(this.props.mode){
            opts['dark'] = 'dark';
        } else {
            opts['light'] = 'light';
        }
        return opts;
    }

    render(){
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
        );

        // Get react-router-dom location and navbar collapseID
        const { location } = this.props;
        const { collapseID } = this.state;

        // Debugging
        console.log(location);

        return(
            <div>
                <MDBNavbar
                color={this.props.mode ? ("agency-dark") : ("white")} {...this._getMode()}
                expand="md"
                fixed="top"
                scrolling
                >
                <MDBContainer>
                    <MDBNavbarBrand
                    href="/"
                    className="py-0 font-weight-bold"
                    >
                    <Logo id="logo" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                    onClick={this.toggleCollapse("mainNavbarCollapse")}
                    />
                    <MDBCollapse
                    id="mainNavbarCollapse"
                    isOpen={this.state.collapseID}
                    navbar
                    >
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            {location.pathname === "/" ? (
                                <MDBSmoothScroll to="hero">
                                Home
                                </MDBSmoothScroll>
                            ) : (
                                <MDBNavLink 
                                to="/"
                                active={false}
                                >
                                Home
                                </MDBNavLink>
                            )}
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/kisy">
                                Login
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
            </div>
        )
    }
}

export default withRouter(Navbar);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
