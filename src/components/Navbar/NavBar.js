import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App';
import { getAuth, signOut } from "firebase/auth";


export default function NavBar() {
    const [user, setUser] = useContext(MyContext);
    const style = {
        textDecoration: 'none',
        color: 'white',
        fontSize: "25px",
        padding: '14px'
    };
    const LogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
            alert("Log Out Successful");
        }).catch((error) => {
        });
    }
    console.log(user);
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
                        {
                            user?.email ?
                                <>
                                    <button onClick={LogOut}>
                                        Log Out
                                    </button>
                                    <span className="text-white">
                                        Name: {user.displayName}
                                    </span>
                                </> :
                                <><NavLink to='/login' style={style}>Login</NavLink>
                                    <NavLink to='/register' style={style}>Registration</NavLink></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
