import Button from '@restart/ui/esm/Button'
import React, { useContext, useState, useHistory } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Register() {
    const [user, setUser] = useContext(MyContext);
    console.log(user);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();
    const handleForm = (e) => {
        e.preventDefault();
        console.log(email, pass);
        if (pass.length < 6) {
            alert('Password must be 6 characters long');
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential.user);
                UpdateName(name);
                setUser({ ...userCredential.user, displayName: name });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }
    const UpdateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    const GetEmail = (e) => {
        setEmail(e.target.value);
    }
    const GetPass = (e) => {
        setPass(e.target.value);
    }
    const GetName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img src="data:image/jpeg;base64,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" width="100%" alt="" />
                </div>
                <div className="ms-5">
                    <Form onSubmit={handleForm}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={GetEmail} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" onChange={GetName} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={GetPass} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Button className='button btn-warning border rounded p-2' type="submit">
                                Register
                            </Button>
                            <NavLink to='/login' style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                Already a member?
                            </NavLink>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
