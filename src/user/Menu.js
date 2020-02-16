import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const onClick= (a) => { console.log(a)}

export default function () {
    return(
        <div>
            <Nav variant="pills" activeKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={onClick}>Option 1</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="3.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
}