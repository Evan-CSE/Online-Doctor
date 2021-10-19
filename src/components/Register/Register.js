import Button from '@restart/ui/esm/Button'
import React, { useContext, useState, useHistory } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";

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
                setUser({...userCredential.user,displayName:name});
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
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={GetEmail} />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Password" onChange={GetName} />
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
