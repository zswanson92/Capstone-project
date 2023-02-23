import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SplashNav.css'
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar/SearchBar';
import { logout } from '../store/session'
import './auth/LogoutButton.css'

const SplashNavBar = () => {
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
    <nav className='splash-main-nav-bar'>
      <div>
        <NavLink to='/' exact={true} activeClassName='active' className='home-navlink'>
          <div className='navbar-img-div'>
            <span className='splash-zelp-span'>Zelp!</span>
            <img src='https://logodix.com/logo/83894.png' alt='Logo' className='home-logo-img'></img>
          </div>
        </NavLink>
      </div>
      <div className='navbar-searchbar-div'>
        <SearchBar />
      </div>
      <div>
        <NavLink to='/businesses' style={{color: 'white'}} exact={true} activeClassName='active' className='viewbusiness-navlink'>
          Businesses
        </NavLink>
      </div>
      {sessionUser ? "" :
        <div>
          <NavLink to='/login' style={{color: 'white'}} exact={true} activeClassName='active' className='login-navlink'>
            Login
          </NavLink>
        </div>}
      {sessionUser ? "" :
        <div>
          <NavLink to='/sign-up' style={{color: 'white'}} exact={true} activeClassName='active' className='signup-navlink'>
            Sign Up
          </NavLink>
        </div>}


      {sessionUser ?
        <div>
          <NavLink to='/create' style={{color: 'white'}} exact={true} activeClassName='active' className='createbusiness-navlink'>
            Create Business
          </NavLink>
        </div> : ""}

      {sessionUser ?
        <div className='testing-navbar-div'>
          <button className='profile-dropdown-button' onClick={openMenu}><i className="fa-regular fa-circle-user fa-2x"></i></button>
          {showMenu && (sessionUser ?
          (
            <div className="profile-dropdown-div">
                <div className='profile-dropdown-div-link'><Link className='link-inside-of-profile-dropdown' to={'/userprofile'}><i className="fa fa-user" aria-hidden="true"> &nbsp; </i> About Me</Link></div>
                <hr className='profile-dropdown-hr'></hr>
                <div className="logout-li">
                  <button className='logout-button' onClick={onLogout}><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</button>
                </div>
            </div>) : "")}
        </div> : ""}

    </nav>
  );
}

export default SplashNavBar;
