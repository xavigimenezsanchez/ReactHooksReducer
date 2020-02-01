import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Logout({ user, dispatch }) {
  return (
    <Jumbotron>
      <h1>Test cypress & jest</h1>
      <p>Logged in as: <b>{user}</b></p>
      <Button variant="primary" onClick={()=>dispatch({ type: "LOGOUT" })}>Logout</Button>
    </Jumbotron>
    
  );
}
