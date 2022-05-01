import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './logo.png'

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/inventory/:id";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {

        navigate(from, { replace: true });
    }
    return (
        <div className='text-center text-white'>

            <Badge className='rounded-pill' onClick={() => signInWithGoogle()} pill bg="primary">
                <img src={logo} alt="" /> Google sign in
            </Badge>

        </div>
    );
};

export default SocialLogIn;