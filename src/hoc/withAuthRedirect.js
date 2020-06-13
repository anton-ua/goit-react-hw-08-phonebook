import React, { Component } from "react";
import * as selectors from "../redux/selectors";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const withAuthRedirect = (BaseComponent) => {
  class withAuthRedirect extends Component {
    componentDidUpdate() {
      if (!this.props.authentificated) {
        return;
      }

      this.props.history.replace("/contacts");
    }
    componentDidMount() {
      if (!this.props.authentificated) {
        return;
      }

      this.props.history.replace("/contacts");
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  withAuthRedirect.propTypes = {
    authentificated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    authentificated: selectors.isAuthentificated(state),
  });

  return connect(mapStateToProps)(withAuthRedirect);
};

export default withAuthRedirect;
