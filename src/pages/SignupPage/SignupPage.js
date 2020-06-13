import React from "react";
import Signup from "../../components/Signup/Signup";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const SignupPage = () => (
  <Container className="pt-4">
    <Row lg={6} className="justify-content-center">
      <Col lg={4}>
        <h3 className="text-center">Register</h3>
        <Signup />
        <p className="mt-4 text-center">
          or&nbsp;
          <NavLink to="/login">Login</NavLink>
        </p>
      </Col>
    </Row>
  </Container>
);

export default withAuthRedirect(SignupPage);
