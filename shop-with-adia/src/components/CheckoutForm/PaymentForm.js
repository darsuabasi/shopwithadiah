import React from 'react';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
// import styled from 'styled-components/macro';
import { Typography, Button, Divider } from '@material-ui/core';


// const AddressFormMain = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 1400px;
// `;

// const Button = styled.button`
   
// `;

// const Divider = styled.div`
   
// `;

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout, timeout }) => {

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'Primary', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      // timeout();
      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <h2 variant="h2" style={{ margin: '20px 0' }}>Payment method </h2>
      <h4 variant="h4" style={{ margin: '20px 0' }}>*Note: Please enter numbers *42* repetitively till zip code is filled!</h4>
      <Elements stripe={stripePromise}>


        <ElementsConsumer> 
          {({ elements, stripe }) => (


            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement/>
              <br/> <br/>

              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <Button type="submit" variant="contained" disabled={!stripe} style={{background:'#f8d7c4'}}>
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};
export default PaymentForm;