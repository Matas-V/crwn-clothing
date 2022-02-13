import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, OptionsContainer, LogoContainer, OptionDiv, OptionLink } from './header.styles';

const Header = () => {
  const { currentUser, hidden } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }))
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {
          currentUser ? 
          <OptionDiv onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionDiv> 
          : 
          <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;