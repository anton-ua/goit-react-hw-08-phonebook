import React, { Component } from "react";

import ButtonSpiner from "../../Services/ButtonSpiner";
//redux
import { connect } from "react-redux";
import { signupFetch } from "../../redux/sessionReducer/sessionOperations";
import * as selectors from "../../redux/selectors";
//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
//formik
import { Formik } from "formik";
import { object, string } from "yup";

import PropTypes from "prop-types";

const schema = object({
  name: string()
    .min(4, "From 4 to 12 symbols")
    .max(12, "From 4 to 12 symbols")
    .required("Enter name"),
  email: string().email("Wrong email").required("Enter email"),
  password: string()
    .min(6, "Too short password")
    .max(12, "Too long password")
    .required("Enter password"),
});

class Signup extends Component {
  handleSubmit = (data) => {
    this.props.signupFetch({ ...data });
  };

  componentDidMount() {}

  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="username"
                  name="name"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={errors.name}
                  isValid={touched.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={errors.email}
                  isValid={touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password from 6 to 12 symbols"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={errors.password}
                  isValid={touched.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {this.props.authError.isError && (
                <Alert variant={this.props.authError.type}>
                  {this.props.authError.text}
                </Alert>
              )}
              <Button
                variant="primary"
                type="submit"
                block
                disabled={this.props.loadingButton}
              >
                {this.props.loadingButton ? <ButtonSpiner /> : <>Sign up</>}
              </Button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

Signup.propTypes = {
  loadingButton: PropTypes.bool.isRequired,
  authError: PropTypes.object.isRequired,
  signupFetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loadingButton: selectors.isLoadingButton(state),
  authError: selectors.getAuthError(state),
});

const mapDispatchToProps = { signupFetch };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
