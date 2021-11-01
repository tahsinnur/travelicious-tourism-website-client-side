import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <div>
            <h2 className="my-5">Log in to your account</h2>
            <button style={{ backgroundColor: "tomato" }} onClick={handleGoogleLogin} className="btn text-white fs-5 px-3"><i className="fab fa-google"></i> Log in with Google</button>
        </div>
    );
};

export default Login;