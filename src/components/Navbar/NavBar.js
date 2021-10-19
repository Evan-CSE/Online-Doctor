import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const style = {
        textDecoration: 'none',
        color: 'white',
        fontSize: "25px",
        padding: '14px'
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/' style={style}>Online Doctor</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' style={style}>Home</NavLink>
                        <NavLink to='/services' style={style}>Services</NavLink>
                        <NavLink to='/contact' style={style}>Contact Us</NavLink>
                        <NavLink to='/about' style={style}>About Us</NavLink>
                        <NavLink to='/login' style={style}>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
