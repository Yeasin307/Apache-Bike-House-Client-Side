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
        <div>
            <h3>Your Product is : {order.product}</h3>
            <h3>Your product price : {order.price}</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>
        </div>
    );
};

export default Pay;