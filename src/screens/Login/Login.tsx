import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from 'react-hot-toast';

import './Login.scss';

import {UserContext} from '../../App';
import { useContext } from "react";

const Login = () => {
  
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const { setUser } = useContext(UserContext);

  const handleClickLogin = () => {

    if(!login || login === ''){
      toast.error('Field login can not be empty');
      return;
    }
    if(!password || password === ''){
      toast.error('Field password can not be empty');
      return;
    }

    const user = {login: login, password: password, token: '123'};
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    history.push('/home');
  }

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  return (
    <div>
      <h2 className="page-title"> Sign in to have access </h2>
      
      <div className="login-container">

        <form>
          <input
            type="text"
            name="login"
            placeholder="Login"
            maxLength={40}
            value={login} 
            onChange={(ev)=>{ setLogin(ev.target.value) }}
          />
          <input
            type="password"
            name="senha"
            placeholder="Password"
            maxLength={40}
            value={password} 
            onChange={(ev)=>{ setPassword(ev.target.value) }}
          />
          <button type="button" onClick={handleClickLogin} >SIGN IN</button>
        </form>

      </div>
    </div>
  );
};
export default Login;
