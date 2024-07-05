import React, { useContext, useState } from 'react';
import { LoginContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useContext(LoginContext);
    const navigate = useNavigate()
    const location = useLocation()
    const [loginSuccess, setLoginSuccess] = useState('');
    console.log(location)
    return (
        <div>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <input type="password" name="" id="" onChange={(event) => setPassword(event.target.value)} />
            <br />
            <button onClick={() => {
                setLogin(true);
                setLoginSuccess('Login Successful')
                setTimeout(() => {
                    setLoginSuccess('')
                }, 2000)
                if (location?.state?.from) {
                    navigate(location?.state?.from);
                }

            }}>Login</button>
            <button onClick={() => {

                setLogin(false)
                setLoginSuccess('Logout Successful')
                setTimeout(() => {
                    setLoginSuccess('')
                }, 2000)
            }}>Logout</button>
            <p> {loginSuccess} </p>
        </div>
    );
};

export default Login;