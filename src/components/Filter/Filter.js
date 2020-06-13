import React, { Component } from "react";
//redux
import { filterContact } from "../../redux/contactsReducer/contactsActions";
import * as selectors from "../../redux/selectors";
import { connect } from "react-redux";
//bootstrap
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    return (
      <Form className="mb-2">
        <Form.Group controlId="formBasicFilter">
          <Form.Control
            type="text"
            name="filter"
            placeholder="Filter..."
            value={this.props.filter}
            onChange={(e) => this.props.filterContact(e.target.value)}
            autoComplete="off"
          />
        </Form.Group>
      </Form>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = {
  filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
