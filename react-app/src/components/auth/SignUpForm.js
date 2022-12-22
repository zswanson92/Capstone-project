import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, fullname, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFullname = (e) => {
    setFullname(e.target.value)
  }

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      let err = []
      err.push('Email is invalid');
      setErrors(err)
    } else {
      setErrors(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className='signupform-main-container'>
      <form onSubmit={onSignUp}>
        <div>
          {errors?.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='first-signupform-input-div'>
          {/* <label>User Name</label> */}
          <input
            required={true}
            className='signupform-inputs'
            placeholder='User Name'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='signupform-input-div'>
          {/* <label>Full Name</label> */}
          <input
            required={true}
            className='signupform-inputs'
            placeholder='Full Name'
            type='text'
            name='fullname'
            onChange={updateFullname}
            value={fullname}
          ></input>
        </div>
        <div className='signupform-input-div'>
          {/* <label>Email</label> */}
          <input
            required={true}
            className='signupform-inputs'
            placeholder='Email'
            type='text'
            name='email'
            onChange={handleChange}
            value={email}
          ></input>
        </div>
        <div className='signupform-input-div'>
          {/* <label>Password</label> */}
          <input
            required={true}
            className='signupform-inputs'
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='signupform-input-div'>
          {/* <label>Repeat Password</label> */}
          <input

            className='signupform-inputs'
            placeholder='Repeat Password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        {/* {} */}
        <button className='sign-up-button' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
