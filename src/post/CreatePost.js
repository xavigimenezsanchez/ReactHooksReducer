import React, { useState } from "react";
import { Form, Badge, Button } from "react-bootstrap";
export default function CreatePost({ user, posts, dispatch }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleContent(evt) {
    setContent(evt.target.value);
  }
  function handleCreate() {
    dispatch({ type: "CREATE_POST", title, content, author: user });
  }
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <h3>
        Author:<Badge variant="secondary">{user}</Badge>
      </h3>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Control as="textarea" rows="5" value={content} onChange={handleContent} />
      </Form.Group>

      <Button variant="primary" type="submit">Create</Button>

    </Form>
  );
}
