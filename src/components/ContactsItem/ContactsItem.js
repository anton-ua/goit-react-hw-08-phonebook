import React from "react";
import PropTypes from "prop-types";
//bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ContactsItem = ({ name, number, id, deleteContact }) => {
  const del = () => deleteContact(id);

  return (
    <ListGroup.Item as="li">
      <span className="font-weight-bold mr-3">{name}</span>
      <a href={`tel:${number}`} className="mr-3">
        {number}
      </a>
      <Button variant="danger" onClick={del}>
        X
      </Button>
    </ListGroup.Item>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
