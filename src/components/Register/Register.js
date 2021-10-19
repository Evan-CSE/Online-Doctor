import Button from '@restart/ui/esm/Button'
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App'
import EmailRegister from '../../FirebaseAuth/EmailRegister/EmailRegister'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'

export default function Register() {
    const [user] = useContext(MyContext);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleForm = (e) => {
        e.preventDefault();
        console.log(email, pass);
        if(pass.length<6){
            alert('Password must be 6 characters long');
            return;
        }
        EmailRegister(email, pass);
    }
    const GetEmail = (e) => {
        setEmail(e.target.value);
    }
    const GetPass = (e) => {
        setPass(e.target.value);
    }
    return (
        <div>
            <NavBar></NavBar>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={GetEmail} />
                </Form.Group>

                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={GetPass} />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto">
                    <Button className='button btn-warning border rounded p-2' type="submit">
                        Register
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
