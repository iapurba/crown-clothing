import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = (price * 100);
  const publishableKey = 'pk_test_51IuWy7SCLm54kVJC0BUaqb31JdlNGs0IG2GsDe9nrWfL7mi6QdDt84H653lv8g9alYK5zztx1uvEDJ6MsQ5FEO2e00th4RIC0m'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      lable='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      allowRememberMe
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;