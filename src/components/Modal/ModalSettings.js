import React, { Component } from "react";
//redux
import { connect } from "react-redux";
import { deleteUserFetch } from "../../redux/sessionReducer/sessionOperations";
//bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";

class ModalSettings extends Component {
  state = {
    deleteUserCheck: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deleteUserCheck) {
      this.setState({
        deleteUserCheck: false,
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      deleteUserCheck: target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.deleteUserFetch();
    this.props.onHide();
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.user.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>email: {this.props.user.email}</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                checked={this.state.deleteUserCheck}
                type="checkbox"
                label="Delete my profile"
                onChange={this.handleChange}
                value={this.state.deleteUserCheck}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="danger"
              disabled={!this.state.deleteUserCheck}
            >
              Delete
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalSettings.propTypes = {
  deleteUserFetch: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  deleteUserFetch,
};

export default connect(null, mapDispatchToProps)(ModalSettings);
