import React, { Component } from "react";

import ContactsItem from "../ContactsItem/ContactsItem";
import Filter from "../../components/Filter/Filter";
//redux
import { connect } from "react-redux";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contactsReducer/contactsOperations";
import * as selectors from "../../redux/selectors";
//bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import PropTypes from "prop-types";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, filter } = this.props;

    const filteredContacts = filter
      ? filterContacts(contacts, filter)
      : contacts;

    return (
      <>
        {this.props.loaderContacts && (
          <Container className="pt-4">
            <Row className="justify-content-center">
              <Spinner animation="border" />
            </Row>
          </Container>
        )}

        {!this.props.loaderContacts && (
          <>
            {contacts.length > 2 && <Filter />}
            <ListGroup as="ul">
              {filteredContacts.length > 0 ? (
                filteredContacts.map(({ id, name, number }) => (
                  <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContact={this.props.deleteContact}
                  />
                ))
              ) : (
                <h4>You have no contacts yet</h4>
              )}
            </ListGroup>
          </>
        )}
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  loaderButton: PropTypes.bool.isRequired,
  loaderContacts: PropTypes.bool.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  loaderButton: selectors.isLoadingButton(state),
  loaderContacts: selectors.isLoadingContacts(state),
});

const mapDispatchToProps = { fetchContacts, deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
