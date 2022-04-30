import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleEmailBlur = event => {
        const email = event.target.value;
        setEmail(email)
    }
    const handlePasswordBlur = event => {
        const password = event.target.value;
        setPassword(password)
    }
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error)
            })

    }
    return (
        <div>
            <h1 className='text-center text-primary'>Pleas Register</h1>
            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="Register ">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;