import Button from '@restart/ui/esm/Button'
import React, { useContext, useState, useHistory } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
    const [user, setUser] = useContext(MyContext);
    console.log(user);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleForm = (e) => {
        e.preventDefault();
        console.log(email, pass);
        if (pass.length < 6) {
            alert('Password must be 6 characters long');
            return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential.user);
                setUser(userCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

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
