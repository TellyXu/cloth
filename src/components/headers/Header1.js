import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// Core Components

function Header1() {
  return (
    <>

      <header className="header-1">
        <Navbar className="bg-default navbar-absolute" expand="lg">
          <Container>
            <NavbarBrand
              className="text-white"
              href="/index"
            >
              Argon
            </NavbarBrand>
            <button
              aria-controls="navbar-header-1"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-header-1"
              data-toggle="collapse"
              id="navbar-header-1"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <UncontrolledCollapse
              id="navbar-header-1"
              navbar
              toggler="#navbar-header-1"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/index">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-header-1"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-header-1"
                      data-toggle="collapse"
                      id="navbar-header-1"
                      type="button"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink
                    className="text-white"
                    href="/index"
                  >
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="text-white"
                    href="/Presentation"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="text-white"
                    href="/index"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav" navbar>
                <NavItem>
                  <NavLink
                    className="text-white"
                    href="https://twitter.com/CreativeTim"
                  >
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="text-white"
                    href="https://www.facebook.com/CreativeTim"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="text-white"
                    href="https://www.instagram.com/CreativeTimOfficial"
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>

      </header>
    </>
  );
}

export default Header1;
