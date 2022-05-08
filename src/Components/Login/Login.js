import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    // user sign in

    const handelSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {

        navigate(from, { replace: true });
    }
    let errorMessage;
    if (error) {
        errorMessage = <p>{error.message}</p>;
    }

    //  Reset Password
    const resetPassword = (event) => {
        setEmail(event.target.value);
        sendPasswordResetEmail(email);
        toast('Sent email');
    }
    return (
        <div>
            <h1 className='text-center text-primary'>Pleas Login</h1>
            <Form onSubmit={handelSignIn} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                </Form.Group>
                <h6 className='text-danger'>{errorMessage}</h6>
                <p>New to comfort furniture<Link to='/register'>Create an account</Link></p>
                <button className='btn btn-success mr-5' onClick={resetPassword}>Reset Password</button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className=' mt-4 d-flex justify-content-center align-items-center w-50 mx-auto'>
                <p className='w-25' style={{ border: "1px solid grey", height: "none" }}></p>
                <p className='px-2'>or</p>
                <p className='w-25' style={{ border: "1px solid grey", height: "0px" }}></p>
            </div>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;
