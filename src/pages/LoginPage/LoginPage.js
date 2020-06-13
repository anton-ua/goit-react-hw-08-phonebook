import React from "react";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const LoginPage = () => (
  <Container className="pt-4">
    <Row lg={6} className="justify-content-center">
      <Col lg={4}>
        <h3 className="text-center">Login</h3>
        <Login />
        <p className="mt-4 text-center">
          or&nbsp;
          <NavLink to="/signup">Register</NavLink>
        </p>
      </Col>
    </Row>
  </Container>
);

export default withAuthRedirect(LoginPage);
