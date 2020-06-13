import React from "react";
import Spinner from "react-bootstrap/Spinner";

const ButtonSpiner = () => (
  <>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2"
    />
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2"
    />
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  </>
);

export default ButtonSpiner;
