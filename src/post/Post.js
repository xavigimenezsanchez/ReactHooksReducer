import React from "react";
import { Card } from "react-bootstrap";

export default function Post({ title, content, author }) {
  return (
     <Card bg="light">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Written by <b>{author}</b></small>
      </Card.Footer>
    </Card>
    );
}
