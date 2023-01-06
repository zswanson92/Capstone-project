import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const setDemoUser = () => {
    setEmail('demo@aa.io')
    setPassword('password')
    return dispatch(login(email, password))
  }

  return (
    <div className='main-login-form-div'>
      <form onSubmit={onLogin}>

        <div>
          {/* <label htmlFor='email'>Email</label> */}
          <input
            className='loginform-inputs-one'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            required={true}
          />
        </div>
        <div>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            className='loginform-inputs'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            required={true}
          />
          <div className='login-form-error-map-div'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='two-loginform-buttons'>
            <button type='submit' className='login-form-login-button'>Login</button>
            <button type='submit' onClick={setDemoUser} className='login-form-login-demo-button'>Login as Demo User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
