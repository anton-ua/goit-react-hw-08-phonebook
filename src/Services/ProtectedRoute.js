import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as selectors from "../redux/selectors";

const ProtectedRoute = ({
  authentificated,
  redirectTo = "/login",
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authentificated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authentificated: selectors.isAuthentificated(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
