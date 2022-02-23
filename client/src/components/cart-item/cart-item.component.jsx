import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart-item'>
      <img alt='item' src={imageUrl} />
      <div className='item-details'>
      <span className='price'>{name}</span>
        <span className='price'>{quantity} x {price}$</span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);