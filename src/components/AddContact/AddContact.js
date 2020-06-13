import React, { Component } from "react";
import ButtonSpiner from "../../Services/ButtonSpiner";
//redux
import { connect } from "react-redux";
import { postContact } from "../../redux/contactsReducer/contactsOperations";
import * as selectors from "../../redux/selectors";
//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const InitialState = { name: "", number: "" };

class AddContact extends Component {
  state = InitialState;

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name) {
      return;
    }

    if (!number) {
      return;
    }

    this.props.postContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState(InitialState);
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="mb-4">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Number</InputGroup.Text>
          </InputGroup.Prepend>

          <NumberFormat
            className="form-control"
            name="number"
            format="+380 (##) ###-##-##"
            mask="_"
            allowEmptyFormatting
            onChange={this.handleChange}
            value={number}
          />
        </InputGroup>

        <Button
          variant="primary"
          type="submit"
          block
          disabled={this.props.loadingButton}
        >
          {this.props.loadingButton ? <ButtonSpiner /> : <>Add Contact</>}
        </Button>
      </Form>
    );
  }
}

AddContact.propTypes = {
  loadingButton: PropTypes.bool.isRequired,
  postContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loadingButton: selectors.isLoadingButton(state),
});

const mapDispatchToProps = { postContact };

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
