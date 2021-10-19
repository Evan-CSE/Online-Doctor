import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Register() {
    return (
        <div>
            <NavBar></NavBar>
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
                        Registration
                    </Button>
                    <NavLink to='/login' style={{ textDecoration: 'none', marginLeft: '4px' }}>
                        Already a member?
                    </NavLink>
                </Form.Group>
            </Form>
            <Footer></Footer>
        </div>
    )
}
