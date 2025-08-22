import React, { Component, useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
  import logo from '../MTA-Inspect_Logo.svg'
import LandingPage from "../pages/LandingPage";

function Navbar() {

  return (
    
      <MDBNavbar color="bg-dark" dark expand="lg" className="pe-5 ps-5">
        <MDBNavbarBrand>
            <img src={logo} className="mta-logo"/>
            <strong className="white-text ps-2">MTA Inspections</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler aria-controls="navbar-nav" />
        <MDBCollapse id="navbar-nav" navbar className="justify-content-lg-end">
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }


export default Navbar;