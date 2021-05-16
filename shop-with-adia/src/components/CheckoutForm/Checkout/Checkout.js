import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import commerce from './../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import styled from 'styled-components/macro';
import useStyles from './styles';
import './checkout.css'

const steps = ['Shipping Address', 'Payment Details'];

const ConfirmationDiv = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
`;

const Spinner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();
  const classes = useStyles();
  // const [isFinished, setIsFinished] = useState(false)

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/adiah/shop');
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  // const timeout = () => {
  //   setTimeout(() => {
  //     setIsFinished(true)
  //   }, 3000)
  // }

  let Confirmation = () => (order.customer ? (
    <>
      <ConfirmationDiv>
        <h1 variant="h5">{order.customer.firstname} {order.customer.lastname}, thank you for your purchase!</h1>
        <Divider className={classes.divider} />
        <h3 variant="subtitle2">Your Order Reference Number: {order.customer_reference}</h3>
      </ConfirmationDiv>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/"> Head Home </Button>
    </>
  ) 
  // : isFinished ? (
  //   <>
  //     <ConfirmationDiv>
  //       <h5 variant="h5">Thank you for your purchase!</h5>
  //       <Divider className={classes.divider} />
  //     </ConfirmationDiv>
  //     <br />
  //     <Button component={Link} variant="outlined" type="button" to="/"> Home! </Button>
  //   </>
  // ) 
  : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));
  if (error) {
    Confirmation = () => (
      <>
        <h5 variant="h5">Error: {error}</h5>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/adiah/shop/cart">Back to Cart</Button>
      </>
    );
  }
  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} /*timeout={timeout}*/ />);
  return (
    <>
      <CssBaseline />
      <div style={{background: '#f8d7c4'}} className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <h4 variant="h4" align="center">Checkout</h4>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step  key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};
export default Checkout;