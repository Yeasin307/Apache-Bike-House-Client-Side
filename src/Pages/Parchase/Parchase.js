import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Parchase = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState({});
    const { _id } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();
    const redirect_uri = '/dashboard';
    console.log(product.name);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        setOrder(newOrder);
    }

    useEffect(() => {
        const uri = `https://secure-inlet-19520.herokuapp.com/explore/${_id}`
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    const handleOrderSubmit = e => {

        fetch('https://secure-inlet-19520.herokuapp.com/parchase', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully Placed.')
                    e.target.reset();
                    history.push(redirect_uri);
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ my: 10 }}>
                <Typography sx={{ color: 'blue', fontWeight: 500 }} variant="h5" gutterBottom>Please Enter Your Information</Typography>
                <form onSubmit={handleOrderSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1, pt: 3 }}
                        label="Product Name"
                        name="product"
                        type="text"
                        value={product?.name}
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Your Name"
                        name="name"
                        type="text"
                        defaultValue={user?.displayName}
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Your Email"
                        name="email"
                        type="email"
                        value={user?.email}
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Your Address"
                        name="address"
                        type="text"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Your Phone Number"
                        name="phone"
                        type="number"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button sx={{ my: 5 }} type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </>
    );
};

export default Parchase;