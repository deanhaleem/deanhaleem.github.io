import React, { Component } from "react";
import { Link } from "gatsby";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBNav,
} from "mdbreact";

import Resume from "../images/ResumeOnline.pdf";

class MyNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        color="unique-color-dark"
        dark
        expand="md"
        className="sticky-top"
        style={{ marginBottom: "2rem" }}
      >
        <Link to="/" className="navbar-brand">
          <strong className="white-text">Dean Haleem</strong>
        </Link>
        <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  Projects
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link className="dropdown-item" to="/projects/">
                    Overview
                  </Link>
                  <MDBDropdownItem divider />
                  <Link className="dropdown-item" to="/mario_clone/">
                    Mario Clone
                  </Link>
                  <Link className="dropdown-item" to="/find_the_t/">
                    Find The T!
                  </Link>
                  <Link className="dropdown-item" to="/myopgg/">
                    MyOPgg
                  </Link>
                  <Link className="dropdown-item" to="/unity/">
                    Unity
                  </Link>
                  <Link className="dropdown-item" to="/website/">
                    Website
                  </Link>
                  <MDBDropdownItem divider />
                  <Link className="dropdown-item" to="/robot/">
                    FEH Robot
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link" to="/about/">
                About
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link" href={"http://deangg.com"} target="_blank">
                MyOPgg
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link" href={"http://deangg.com/FindTheT"} target="_blank">
                Find The T!
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link" href={Resume} target="_blank">
                R&eacute;sum&eacute;
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a
                className="nav-link"
                href="https://github.com/deanhaleem"
                target="_blank"
              >
                <MDBIcon fab icon="github" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className="nav-link"
                href="https://instagram.com/deanhaleem"
                target="_blank"
              >
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/deanhaleem"
                target="_blank"
              >
                <MDBIcon fab icon="linkedin-in" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default MyNavbar;
