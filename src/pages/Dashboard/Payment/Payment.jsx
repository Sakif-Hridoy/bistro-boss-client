import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to Buy Food"></SectionTitle>
            <Elements stripe={stripePromise}>
            

            </Elements>
        </div>
    );
};

export default Payment;