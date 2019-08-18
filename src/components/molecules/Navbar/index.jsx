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
// Logo light
import { ReactComponent as LogoLight } from  '../../../assets/content/logo_withtype_white_sm.svg';
// Logo dark
import { ReactComponent as LogoDark } from '../../../assets/content/logo_withtype_dark_sm.svg';

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
                <MDBNavbar color={this.props.mode ? ("agency-dark") : ("white")} dark expand="md" fixed="top" scrolling>
                <MDBContainer>
                    <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                    {this.props.mode ? (<LogoLight/>) : (<LogoDark/>)}
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
