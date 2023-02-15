import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import logo from '../../assets/signup_illustration.png'
import logotwo from '../../assets/githublogo.png'


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
    <>

      <div className='main-login-form-div'>
        <div><img src={logo} alt='Loading...' /></div>
        <div className='login-form-div-container'>
          <h2 className='login-h2'>Login to Zelp!</h2>
          <h4>New to Zelp? <Link className='loginform-signup-link' to={'/sign-up'}>Sign Up</Link></h4>
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
                <div className='forgot-pw-div'><Link className='forgot-pw-link' to={'/production'}>Forgot your password?</Link></div>
              </div>
              <div className='two-loginform-buttons'>
                <button type='submit' className='login-form-login-button'>Log In</button>
                <button type='submit' onClick={setDemoUser} className='login-form-login-demo-button'>Login as Demo User</button>
              </div>
            </div>
          </form>
        </div>

      </div>
      <div className='login-form-footer-div'>
      <footer className='splash-footer'>
        <div className="splash-footer-div">
          <div className="corp-div">© 2022 Zelp Corp</div>
          <div className='foot-name-div'>

            <div className='href-div'><a className='splash-github-link' href='https://github.com/zswanson92'>  Zack Swanson</a></div>
            <div><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='Logo' className='splash-logo-img'></img></div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default LoginForm;
