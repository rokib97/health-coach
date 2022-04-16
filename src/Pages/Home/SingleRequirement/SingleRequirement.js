import React from "react";
import { Card } from "react-bootstrap";
import "./SingleRequirement.css";

const SingleRequirement = ({ requirement }) => {
  const { img, name, description } = requirement || {};
  return (
    <div className="col-lg-3 col-md-6 col-12 text-center">
      <Card className="h-100 mx-auto card-details">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleRequirement;
