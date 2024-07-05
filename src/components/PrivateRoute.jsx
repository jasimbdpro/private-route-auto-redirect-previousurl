import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

const PrivateRoute = ({ Component }) => {
    const [login] = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(login)
    useEffect(() => {
        if (!login) {
            navigate('/login', { state: { from: location } })
        }
    }, [location, login, navigate]);

    return login ? Component : null;
};

export default PrivateRoute;