import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register({ dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handlePasswordRepeat(evt) {
    setPasswordRepeat(evt.target.value);
  }
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "REGISTER", username });
      }}
    >
      <Form.Group>
        <Form.Label>Username </Form.Label>
        <Form.Control
          type="text"
          placeholder="user name" 
          value={username}
          onChange={handleUsername}
          name="register-username"
          id="register-username"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handlePassword}
          name="register-password"
          id="register-password"
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          type="password"
          value={passwordRepeat}
          onChange={handlePasswordRepeat}
          name="register-password-repeat"
          id="register-password-repeat"
        />
      </Form.Group>

      <Button 
          variant="primary" 
          type="submit" 
          disabled={
            username.length === 0 ||
            password.length === 0 ||
            password !== passwordRepeat
            }
        >
          Submit
        </Button>
    </Form>
  );
}
