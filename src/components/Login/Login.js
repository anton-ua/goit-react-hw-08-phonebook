import React, { Component } from "react";

import ButtonSpiner from "../../Services/ButtonSpiner";
//redux
import * as selectors from "../../redux/selectors";
import { connect } from "react-redux";
import { loginFetch } from "../../redux/sessionReducer/sessionOperations";
import { clearAuthError } from "../../redux/errorReducer/errorActions";
//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
//formik
import { Formik } from "formik";
import { object, string } from "yup";

import PropTypes from "prop-types";

const schema = object({
  email: string().email("Wrong email").required("Enter email"),
  password: string().required("Enter password"),
});

class Login extends Component {
  handleSubmit = (data) => {
    this.props.loginFetch({ ...data });
  };

  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => {
          return (
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="formBasicEmail">
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
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
                {this.props.loadingButton ? <ButtonSpiner /> : <>Login</>}
              </Button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

Login.propTypes = {
  loadingButton: PropTypes.bool.isRequired,
  authError: PropTypes.object.isRequired,
  loginFetch: PropTypes.func.isRequired,
  clearAuthError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loadingButton: selectors.isLoadingButton(state),
  authError: selectors.getAuthError(state),
});

const mapDispatchToProps = { loginFetch, clearAuthError };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
