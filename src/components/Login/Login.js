import Button from '@restart/ui/esm/Button'
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import GoogleSignIn from '../../FirebaseAuth/GoogleSignIn/GoogleSignIn'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { MyContext } from '../../App';


export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useContext(MyContext);
    const [er, setEr] = useState('');
    const HandleLogin = (e) => {
        e.preventDefault();
        console.log(email, pass);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);
                console.log(user);
                setEr('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setEr("Invalid Credential");
            });


    }
    const GoogleSignIn = () => {
        console.log("Clicked");
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    const SETEmail = (e) => {
        setEmail(e.target.value);
    }
    const setPassword = (e) => {
        setPass(e.target.value);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div style={{ backgroundImage: "url('data:image/jpeg;base64,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')",backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                <h1 className="text-center text-info">
                    Login Panel
                </h1>
                <h5 className="text-danger text-center">
                    {er}
                </h5>
                <Form onSubmit={HandleLogin}>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                        <Form.Label className="text-info">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={SETEmail} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                        <Form.Label className="text-info">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={setPassword} />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75 mx-auto">
                        <Button className='button btn-warning border rounded p-2' type="submit">
                            Login
                        </Button>
                        <NavLink to='/register' style={{ textDecoration: 'none', marginLeft: '4px',fontSize:'25px',color:'rgb(13,202,240)' }}>
                            New User?
                        </NavLink>
                    </Form.Group>
                    <button className='border rounded bg-info d-block mx-auto' onClick={GoogleSignIn}>
                    Login with google
                </button>
                </Form>
            </div>
            <Footer></Footer>
        </div>
    )
}
