import React, { useEffect,  useRef } from "react";
import { Nav, NavDropdown, Row, Col } from "react-bootstrap";
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './ellipsis.css';

const onClick= (a) => { console.log(a)}

export default function () {
    const ellipsis = useRef(this);

    useEffect(() => {
        const link = ellipsis.current.getElementsByTagName('a')[0];
        if (link.getElementsByTagName('i').length === 0) {
            const icon = document.createElement('i');
            icon.setAttribute('class','fas fa-ellipsis-v');
            link.appendChild(icon);
        }
        
    })
    return(
        <Row>
            <Col md={10}>
                <Nav variant="pills" activeKey="link-0" className="justify-content-center" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={onClick}>Option 1</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="3.1"></NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
            <Col md={2}>
            <Nav variant="pills" ref={ellipsis} className = "ellipsis">                    
                    <NavDropdown title="" id="nav-dropdown">
                        <NavDropdown.Item eventKey="1.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="1.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="1.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="1.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
        </Row>
    )
}