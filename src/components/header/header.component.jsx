import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const hidden = useSelector((state) => state.cart.hidden);

  const { currentUser, hidden } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }))

  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className="logo" />
      </Link>
      <div className='options'>
        <Link className='option' to="/shop">Shop</Link>
        <Link className='option' to="/contact">Contact</Link>
        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
          : 
          <Link className='option' to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;