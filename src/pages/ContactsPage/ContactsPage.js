import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddContact from "../../components/AddContact/AddContact";
import ContactsList from "../../components/ContactsList/ContactsList";

const ContactsPage = () => (
  <Container className="pt-4">
    <Row className="justify-content-center">
      <Col>
        <h3 className="text-center">Contacts</h3>
      </Col>
    </Row>
    <Row>
      <Col md={5}>
        <AddContact />
      </Col>
      <Col md="7">
        <ContactsList />
      </Col>
    </Row>
  </Container>
);

export default ContactsPage;
