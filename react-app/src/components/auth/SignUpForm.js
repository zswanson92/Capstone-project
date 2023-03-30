import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { signUp } from '../../store/session'
import './SignUpForm.css'
import logo from '../../assets/signup_illustration.png'

const SignUpForm = () => {
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  const onSignUp = async e => {
    e.preventDefault()
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, fullname, email, password))
      if (data) {
        setErrors(data)
      }
    }
  }

  const updatePassword = e => {
    setPassword(e.target.value)
  }

  if (user) {
    return <Redirect to='/' />
  }

  function isValidEmail (email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      let err = []
      err.push('Email is invalid')
      setErrors(err)
    } else {
      setErrors([])
    }

    setEmail(event.target.value)
  }

  const repeatPasswordHandleChange = e => {
    if (repeatPassword !== password) {
      let errArr = []
      errArr.push('Your repeat password does not match the original.')
      setErrors(errArr)
    } else {
      setErrors([])
    }
    setRepeatPassword(e.target.value)
  }

  const userNameHandleChange = e => {
    if (username.length > 25) {
      let arr = []
      arr.push('Your username must be less than 25 characters long.')
      setErrors(arr)
    } else {
      setErrors([])
    }
    setUsername(e.target.value)
  }

  const fullNameHandleChange = e => {
    if (fullname.length > 40) {
      let newArr = []
      newArr.push('Full name cannot exceed 40 characters long.')
      setErrors(newArr)
    } else {
      setErrors([])
    }
    setFullname(e.target.value)
  }

  return (
    <>
      <div className='main-login-form-div'>
        <div className='signup-image-div'>
          <img src={logo} alt='Loading...' />
        </div>
        <div className='login-form-div-container'>
          <form className='signup-form-form' onSubmit={onSignUp}>
            <h2 className='signup-h2'>Sign up for Zelp!</h2>
            <div style={{ fontWeight: 'bold' }}>
              Connect with great local businesses
            </div>
            <div className='first-signupform-input-div'>
              <input
                className={
                  username.length > 0 && username.length < 26
                    ? 'signupform-inputs'
                    : 'falsey-signupform-inputs'
                }
                placeholder='User Name'
                type='text'
                name='username'
                onChange={userNameHandleChange}
                value={username}
              ></input>
              {username.length > 25 ? (
                <div className='error-message-signupform-divs-username'>
                  Username cannot exceed 25 characters.
                </div>
              ) : (
                ''
              )}
              {/* {!username.length ? <div className='error-message-signupform-divs'>This is a required field.</div> : ""} */}
            </div>
            <div className='signupform-input-div'>
              <input
                className={
                  fullname.length > 0 && fullname.length < 41
                    ? 'signupform-inputs'
                    : 'falsey-signupform-inputs'
                }
                placeholder='Full Name'
                type='text'
                name='fullname'
                onChange={fullNameHandleChange}
                value={fullname}
              ></input>
              {fullname.length > 40 ? (
                <div className='error-message-signupform-divs'>
                  Full name cannot exceed 40 characters.
                </div>
              ) : (
                ''
              )}
              {/* {!fullname.length ? <div className='error-message-signupform-divs'>This is a required field.</div> : ""} */}
            </div>
            <div className='signupform-input-div'>
              <input
                className={
                  isValidEmail(email) &&
                  !errors.includes('email : Email address is already in use.')
                    ? 'signupform-inputs'
                    : 'falsey-signupform-inputs'
                }
                placeholder='Email'
                type='text'
                name='email'
                onChange={handleChange}
                value={email}
              ></input>
              {email.length && !isValidEmail(email) ? (
                <div className='error-message-signupform-divs'>
                  Not a valid Email address.
                </div>
              ) : (
                ''
              )}
              {errors.includes('email : Email address is already in use.') ? (
                <div className='error-message-signupform-divs-emailinuse'>
                  That email address is already in use.
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='signupform-input-div'>
              <input
                className={
                  !password.length
                    ? 'falsey-signupform-inputs'
                    : 'signupform-inputs'
                }
                placeholder='Password'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
              {/* {!password.length ? <div className='error-message-signupform-divs'>This is a required field.</div> : ""} */}
            </div>
            <div className='signupform-input-div'>
              <input
                className={
                  repeatPassword !== password || !repeatPassword.length
                    ? 'falsey-signupform-inputs'
                    : 'signupform-inputs'
                }
                placeholder='Repeat Password'
                type='password'
                name='repeat_password'
                onChange={repeatPasswordHandleChange}
                value={repeatPassword}
              ></input>
              {repeatPassword !== password ? (
                <div className='error-message-signupform-divs-repeat'>
                  Does not match the original.
                </div>
              ) : (
                ''
              )}
            </div>
            {errors.map((error, ind) => (
                  <div className='signupform-errs' key={ind}>{error}</div>
            ))}
            <button className='sign-up-button' type='submit'>
              Sign Up
            </button>
            <div className='already-on-div'>
              Already on Zelp?{' '}
              <Link className='signupform-login-link' to={'/login'}>
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className='signup-form-footer'>
        <div className='splash-footer-div-signup'>
          <div className='corp-div'>© 2022 Zelp Corp</div>
          <div className='foot-name-div'>
            <div className='href-div'>
              <a
                className='splash-github-link'
                target="_blank" rel="noreferrer"  href='https://www.linkedin.com/in/zack-swanson-90697b261/'
              >
                {' '}
                Zack Swanson
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href='https://github.com/zswanson92/Capstone-project'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                alt='Logo'
                className='splash-logo-img'
              ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpForm

// disabled={errors.length > 0 ? true : false}
