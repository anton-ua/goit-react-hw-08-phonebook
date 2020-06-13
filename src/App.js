import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./Services/ProtectedRoute";
import { setBaseURL, setAuthToken } from "./Services/server";

import ModalSettings from "./components/Modal/ModalSettings";
import Navigation from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
//redux
import * as selectors from "./redux/selectors";
import {
  getUserFetch,
  logoutFetch,
} from "./redux/sessionReducer/sessionOperations";
import { connect } from "react-redux";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PropTypes from "prop-types";

class App extends Component {
  state = {
    showModalSettings: false,
  };

  componentDidMount() {
    setBaseURL();

    if (this.props.token) {
      setAuthToken(this.props.token);
      this.props.getUserFetch();
    }
  }

  openModal = () => {
    this.setState({ showModalSettings: true });
  };

  closeModal = () => {
    this.setState({ showModalSettings: false });
  };

  render() {
    return (
      <>
        <Navigation
          user={this.props.user}
          authentificated={this.props.authentificated}
          logout={this.props.logoutFetch}
          openModal={this.openModal}
        />
        {this.props.loaderApp ? (
          <Container className="pt-4">
            <Row className="justify-content-center">
              <Spinner animation="border" />
            </Row>
          </Container>
        ) : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path="/contacts" component={ContactsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        )}
        <ModalSettings
          show={this.state.showModalSettings}
          onHide={this.closeModal}
          user={this.props.user}
        />
      </>
    );
  }
}

App.propTypes = {
  user: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  authentificated: PropTypes.bool.isRequired,
  loaderApp: PropTypes.bool.isRequired,
  getUserFetch: PropTypes.func.isRequired,
  logoutFetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: selectors.getUser(state),
  token: selectors.getToken(state),
  authentificated: selectors.isAuthentificated(state),
  loaderApp: selectors.isLoadingApp(state),
});

const mapDispatchToProps = { getUserFetch, logoutFetch };

export default connect(mapStateToProps, mapDispatchToProps)(App);
