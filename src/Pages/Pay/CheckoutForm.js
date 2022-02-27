import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ order }) => {
    const { price, name, _id } = order;
    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://secure-inlet-19520.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price])

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
            setProcessing(false);
        }
        else {
            setError('');
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
            setProcessing(false);
        }
        else {
            setError('');
            setSuccess(true);
            setProcessing(false);

            const payment = {
                last4: paymentMethod.card.last4,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://secure-inlet-19520.herokuapp.com/orders/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
            alert("Your payment successfully proceeded");
            history.replace('/dashboard');
        }
    }

    return (
        <>
            <div style={styles.div}>
                <form style={{ width: '75%' }} onSubmit={handleSubmit}>
                    <CardElement
                        options={styles.cardElement}
                    />

                    {processing ?
                        <CircularProgress></CircularProgress>
                        :
                        <button style={styles.button} type="submit" disabled={!stripe || success}>Pay
                        </button>
                    }

                </form>
            </div >

            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
        </>

    );
};

export default CheckoutForm;

const styles = {
    button: {
        marginTop: '25px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#0060FF',
        padding: '7.5px 15px',
        border: 'none',
        borderRadius: '5px'
    },
    div: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px'
    },
    cardElement: {
        style: {
            base: {
                fontSize: '20px',
                color: 'black',
                '::placeholder': {
                    color: 'gray'
                }
            },
            invalid: {
                color: 'red',
            }
        }
    }
}