import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Menu from "./Menu"
import { Container, Button, Accordion, Card, Row, Col } from 'react-bootstrap';


export default function UseBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md={2}>
              <Menu/>
            </Col>
            <Col>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Filter
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row>
                        <Col>
                          <Login dispatch={dispatch} />
                        </Col>
                        <Col>
                          <Register dispatch={dispatch} />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
