import React , {useContext } from "react";
import { Card } from "react-bootstrap";
import { ThemeContext } from '../contexts';

export default function Post({ title, content, author }) {
  const {secondaryColor } = useContext(ThemeContext);
  return (
     <Card bg="light">
      <Card.Body>
        <Card.Title style={{color: secondaryColor}}>{title}</Card.Title>
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
