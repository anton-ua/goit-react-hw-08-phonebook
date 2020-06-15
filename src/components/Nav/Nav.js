import React from "react";
import { NavLink } from "react-router-dom";
//bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import PropTypes from "prop-types";

const Navigation = ({ user, authentificated, logout, openModal }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Phonebook App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
          {authentificated && (
            <NavLink to="/contacts" className="nav-link">
              Contacts
            </NavLink>
          )}
        </Nav>
        <Nav>
          {authentificated ? (
            <NavDropdown title={user.name} id="basic-nav-dropdown">
              <Dropdown.Item as="button" onClick={openModal}>
                My profile
              </Dropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="button" onClick={logout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

Navigation.propTypes = {
  user: PropTypes.object.isRequired,
  authentificated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Navigation;
