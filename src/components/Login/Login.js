import Button from '@restart/ui/esm/Button'
import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import GoogleSignIn from '../../FirebaseAuth/GoogleSignIn/GoogleSignIn'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Login() {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-center text-info">
                Login Panel
            </h2>
            <Form>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto">
                    <Button className='button btn-warning border rounded p-2' type="submit">
                        Login
                    </Button>
                    <NavLink to='/register' style={{ textDecoration: 'none', marginLeft: '4px' }}>
                        New User?
                    </NavLink>
                </Form.Group>
            </Form>
            <button className='border rounded bg-info d-block mx-auto' onClick={GoogleSignIn}>
                Login with google
            </button>
            <Footer></Footer>
        </div>
    )
}
