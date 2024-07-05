import React, { createContext, useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import SecretVideo from './components/SecretVideo';
export const LoginContext = createContext();

const App = () => {

  const [login, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      <HashRouter>
        <Link to='/'>/Home</Link> &nbsp;

        <Link to='/privateroute'> Secret Video</Link> &nbsp;

        <Link to='/login' >Login</Link> &nbsp;
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/privateroute' element={<PrivateRoute Component={<SecretVideo />} />} />
        </Routes>
      </HashRouter>
    </LoginContext.Provider>
  );
};

export default App;