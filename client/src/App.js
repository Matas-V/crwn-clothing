import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Checkout from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }));

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignOutPage />)} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;