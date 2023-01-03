import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import BusinessForm from './components/business_form/BusinessForm';
import Businesses from './components/Businesses';
import BusinessDetails from './components/BusinessDetails';
import EditBusiness from './components/edit_business';
import EditReviewButton from './components/edit_review/EditReview';
import SplashPage from './components/SplashPage/SplashPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/create' exact={true}>
        <BusinessForm />
        </Route>
        <Route path='/businesses' exact={true}>
        <Businesses />
        </Route>
        <Route path='/businesses/:businessId' exact={true}>
        <BusinessDetails />
        </Route>
        <Route exact={true} path="/edit/businesses/:businessId">
          <EditBusiness />
        </Route>
        <Route exact={true} path="/edit/:businessId/reviews/:reviewId">
          <EditReviewButton />
        </Route>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route path='/production'>
          <h1>Implementation not complete, coming soon.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
