import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JEDFwJvqssHHt4l6vHEZv52tlp7spqJsI5PZ2TcneIhE8of068R61grbOQhvVWULGirLdoadiRFiGd9ahNvBfzB00LdrQ1zxG';

  const onToken = token => {
    console.log(token)
    alert("Your payment was successful")
  }
  
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;