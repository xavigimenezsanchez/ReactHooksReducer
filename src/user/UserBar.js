import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { Container, Row, Col } from 'react-bootstrap';


export default function UseBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Login dispatch={dispatch} />
            </Col>
            <Col>
              <Register dispatch={dispatch} />
            </Col>
        </Row>
        </Container>
      </React.Fragment>
    );
  }
}
