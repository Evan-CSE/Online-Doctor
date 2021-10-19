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
    const [er,setEr] = useState('');
    const HandleLogin = (e) => {
        e.preventDefault();
        console.log(email,pass);
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
    const SETEmail = (e)=>{
        setEmail(e.target.value);
    }
    const setPassword =(e)=>{
        setPass(e.target.value);
    }
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-center text-info">
                Login Panel
            </h2>
            <h5 className="text-danger text-center">
                {er}
            </h5>
            <Form onSubmit={HandleLogin}>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={SETEmail} />
                </Form.Group>

                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={setPassword}/>
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
