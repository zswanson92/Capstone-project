import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import logo from '../assets/yelp_logo.PNG'
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar/SearchBar';
import { logout } from '../store/session'
import './auth/LogoutButton.css'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu)
  }

  const dispatch = useDispatch()
  const onLogout = async (e) => {
    setShowMenu(false)
    await dispatch(logout());
  };

  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className='main-nav-bar'>
      <div>
        <NavLink to='/' exact={true} activeClassName='active' className='home-navlink'>
          <div className='navbar-img-div'>
            <span className='zelp-span'>Zelp!</span>
            <img src={logo} alt='Logo' className='home-logo-img'></img>
          </div>
        </NavLink>
      </div>
      <div className='navbar-searchbar-div'>
        <SearchBar />
      </div>
      <div>
        <NavLink to='/businesses' exact={true} activeClassName='active' className='viewbusiness-navlink'>
          View Businesses
        </NavLink>
      </div>
      {sessionUser ? "" :
        <div>
          <NavLink to='/login' exact={true} activeClassName='active' className='login-navlink'>
            Login
          </NavLink>
        </div>}
      {sessionUser ? "" :
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='signup-navlink'>
            Sign Up
          </NavLink>
        </div>}
      {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}

      {sessionUser ?
        <div>
          <NavLink to='/create' exact={true} activeClassName='active' className='createbusiness-navlink'>
            Create Business
          </NavLink>
        </div> : ""}

      {sessionUser ?
        <div>
          {/* <LogoutButton /> */}
          <button className='profile-dropdown-button' onClick={openMenu}><i className="fa-regular fa-circle-user fa-2x"></i></button>
        </div> : ""}

      {showMenu && (sessionUser ?
        (
          <div className="profile-dropdown-div">
            <ul className="profile-dropdown">
              <li className="fullname-li">Full Name: {sessionUser.fullname}</li>
              <li className="username-li">Username: {sessionUser.username}</li>
              <li className="useremail-li">User email: {sessionUser.email}</li>
              <li className="logout-li">
                {/* <button className="the-logout-button" onClick={logout}>Log Out</button> */}
                {/* <LogoutButton /> */}
                <button className='logout-button' onClick={onLogout}>Log Out</button>
              </li>
            </ul>
          </div>) : "")}
    </nav>
  );
}

export default NavBar;
