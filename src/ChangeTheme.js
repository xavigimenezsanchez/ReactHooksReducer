import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const THEMES = [    { primaryColor: 'deepskyblue', secondaryColor: 'coral' },    { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }];

function ThemeItem({ theme, active, onClick }) {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span style={{ color: theme.primaryColor }}>Primary</span> / <span style={{ color: theme.secondaryColor }}>Secondary</span>
        </span>
    )
}


export default function ChangeTheme ({ theme, setTheme }) {
    function isActive (t) {        
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor    
    }

    function handleOnChange(e){
        if (e.target.checked) {
            setTheme(THEMES[1])
        } else {
            setTheme(THEMES[0])
        }
    }
    return (
        <Form>
            <Row>
                <Col md={1}>
                    <Form.Check
                        type="switch"
                        id="theme-switch"
                        label=""
                        onChange={handleOnChange}
                    />
                </Col>
                <Col>
                        Change theme:
                    {THEMES.map((t, i) =>
                        <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
                    )}
                </Col>
            
            </Row>
            
        </Form>
    )
}