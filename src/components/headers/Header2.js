import React from "react";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function Header2() {
  return (
      <>
        <header className="header-2">
          <Navbar className="bg-white navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Creative Tim
              </NavbarBrand>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right" navbar>
                <NavItem>
                  <NavLink href="https://twitter.com/CreativeTim">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.facebook.com/CreativeTim">
                    <i className="fab fa-facebook-square"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.instagram.com/CreativeTimOfficial">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </>
  );
}

export default Header2;
