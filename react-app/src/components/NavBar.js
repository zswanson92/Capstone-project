import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import logo from '../assets/zelp_logo.png'
import { useSelector } from 'react-redux';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className='main-nav-bar'>
      <ul className='navbar-primary-ul'>
        <li className='navbar-home-li'>
          <NavLink to='/' exact={true} activeClassName='active' className='home-navlink'>
            <div className='navbar-img-div'>
              <img src={logo} alt='Logo' className='home-logo-img'></img>
            </div>
          </NavLink>
        </li>
        <li className='navbar-login-li'>
          <NavLink to='/login' exact={true} activeClassName='active' className='login-navlink'>
            Login
          </NavLink>
        </li>
        <li className='navbar-signup-li'>
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='signup-navlink'>
            Sign Up
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {sessionUser ?
        <li className='navbar-createbusiness-li'>
          <NavLink to='/create' exact={true} activeClassName='active' className='createbusiness-navlink'>
            Create Business
          </NavLink>
        </li> : ""}
        <li className='navbar-viewbusiness-li'>
          <NavLink to='/businesses' exact={true} activeClassName='active' className='viewbusiness-navlink'>
            View Businesses
          </NavLink>
        </li>
        {sessionUser ?
        <li className='navbar-home-li'>
          <LogoutButton />
        </li> : ""}
      </ul>
    </nav>
  );
}

export default NavBar;
