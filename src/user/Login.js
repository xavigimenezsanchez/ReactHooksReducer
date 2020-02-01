import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login({ dispatch }) {
  const [username, setUsername] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username });
      }}
    >

        <Form.Group>
            <Form.Label>Username </Form.Label>
            <Form.Control type="text" 
                          placeholder="user name" value={username}
                          onChange={handleUsername}
                          name="login-username"
                          id="login-username"/>
            <Form.Text className="text-muted">
              We'll never share your username with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id="login-password"/>
        </Form.Group>
        
        <Button variant="primary" type="submit" disabled={username.length === 0}>
          Submit
        </Button>

    </Form>
  );
}
