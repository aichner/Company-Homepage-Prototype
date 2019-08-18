//> React
// Contains all the functionality necessary to define React components
import React from 'react';

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

        const { collapseID } = this.state;
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
                    <Logo />
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
                            <MDBNavLink
                                exact
                                to="/"
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                            >
                                <strong>Home</strong>
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

export default Navbar;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
