import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import SplashNavBar from './components/SplashNav';
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
// import Pagination from './components/Pagination/Pagination';
import UserProfile from './components/UserProfile/UserProfile';
// import logo from './assets/blinkyguy.gif'
import FourOhFour from './components/FourOhFour/FourOhFour';
import InProd from './components/InProduction/InProd';
import CreateMenu from './components/CreateMenu/CreateMenu';
import CreateMenuItem from './components/CreateMenuItem/CreateMenuItem';
import HomeMap from './components/MapsApi';
import AddMenuItem from './components/AddMenuItem/AddMenuItem';
import DeleteMenu from './components/DeleteMenu/DeleteMenu';
import RemoveMenuItem from './components/RemoveMenuItem/RemoveMenuItem';
import FullMenu from './components/FullMenu/FullMenu';
import EditMenu from './components/EditMenu/EditMenu';
import EditMenuItem from './components/EditMenuItem/EditMenuItem';
import Results from './components/SearchBar/Results';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>

      <Switch>
        <Route path='/map' exact={true}>
          <HomeMap />
        </Route>
        <Route path='/login' exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/create' exact={true}>
          <BusinessForm />
        </ProtectedRoute>
        <Route path='/businesses' exact={true}>
          <NavBar />
          <Businesses />
          {/* <Pagination totalPosts={aBusiness.length} postsPerPage={postPerPage}/> */}
        </Route>
        <Route path='/businesses/:businessId' exact={true}>
          <NavBar />
          <BusinessDetails />
        </Route>
        <ProtectedRoute exact={true} path="/edit/businesses/:businessId">
          <EditBusiness />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/edit/:businessId/reviews/:reviewId">
          <EditReviewButton />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/businesses/:businessId/menuadd">
          <AddMenuItem />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/businesses/:businessId/deletemenu">
          <DeleteMenu />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/businesses/:businessId/menu/items/:menuId">
          <RemoveMenuItem />
        </ProtectedRoute>
        <Route exact={true} path="/businesses/:businessId/fullmenu">
          <FullMenu />
        </Route>
        <ProtectedRoute exact={true} path="/menuedit/:menuId">
          <EditMenu />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/businesses/:businessId/menuedit/item/:menuItemId">
          <EditMenuItem />
        </ProtectedRoute>
        <Route exact={true} path="/create/menu/:menuId">
          <CreateMenuItem />
        </Route>
        <ProtectedRoute exact={true} path="/create/:businessId/menu">
          <CreateMenu />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashNavBar />
          <SplashPage />
        </Route>
        <Route path='/production'>
          <InProd />
        </Route>
        <Route path='/userprofile'>
          <UserProfile />
        </Route>
        <Route path='/search'>
          <NavBar />
          <Results />
        </Route>
        <Route>
          <FourOhFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
