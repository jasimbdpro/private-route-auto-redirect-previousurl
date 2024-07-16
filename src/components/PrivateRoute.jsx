import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

const PrivateRoute = ({ Component }) => {
    const [login] = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!login) {
            navigate('/login', { state: { from: location } }); // Corrected navigation
        }
    }, [location, login, navigate]);

    return login ? <Component /> : null;
};

export default PrivateRoute;
