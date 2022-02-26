import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KPBJdCOeqYQIZQz07QufIUAu8CU7OLzo30k0nBVntJBy5DXuacjnV09sb9XC7Nyv6p08zti26FrLCSqCQODZHuE00cKGdrNCL');

const Pay = () => {
    const { productId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://secure-inlet-19520.herokuapp.com/orders/${productId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [productId])

    return (
        <>
            <h3 style={{ color: 'green', marginBottom: '5px' }}>Your Product: {order.product}</h3>
            <h3 style={{ color: 'green', marginTop: '5px' }}>price: {order.price}</h3>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
        </>
    );
};

export default Pay;