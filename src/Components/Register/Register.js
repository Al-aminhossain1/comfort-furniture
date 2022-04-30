import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    // const [email, setEmail] = useState('');
    // const [password, setpassword] = useState('');
    // // const [confirmPassword, setConfirmPassword] = useState('');
    const [error1, setError1] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const Navigate = useNavigate();

    if (user) {
        Navigate('/')
    }
    const handleRegister = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setError1('two password did not match')

        }
        createUserWithEmailAndPassword(email, password, confirmPassword)

        console.log(user);
    }
    return (
        <div>
            <h1 className='text-center text-primary'>Pleas Register</h1>
            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm  Password" />
                    </Form.Group>
                    <h6>{error1}</h6>
                    <p>Already have an account<Link to='/login'>Please login</Link></p>
                    <Button variant="primary" type="Register ">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;