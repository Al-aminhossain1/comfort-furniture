import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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