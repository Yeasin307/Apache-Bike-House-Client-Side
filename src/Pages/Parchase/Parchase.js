import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Parchase = () => {
    const { user } = useAuth();
    const { _id } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();
    const productRef = useRef();
    const priceRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const redirect_uri = '/dashboard';

    useEffect(() => {
        const uri = `https://secure-inlet-19520.herokuapp.com/explore/${_id}`
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    const handleOrderSubmit = e => {
        const product = productRef.current.value;
        const price = priceRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const order = { product, price, name, email, address, phone }

        console.log(order);

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

                <Typography sx={{ color: 'blue', fontWeight: 500 }} variant="h5" gutterBottom>
                    Please Enter Your Information
                </Typography>

                <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                    <label style={styles.label}>
                        Product
                        <input style={styles.input} readonly="readonly" required ref={productRef} type="text" defaultValue={product?.name} />
                    </label>
                    <label style={styles.label}>
                        Price
                        <input style={styles.input} readonly="readonly" required ref={priceRef} type="text" defaultValue={product?.price} />
                    </label>

                    <label style={styles.label}>
                        Name
                        <input style={styles.input} required ref={nameRef} type="text" defaultValue={user?.displayName} />
                    </label>

                    <label style={styles.label}>
                        Email
                        <input style={styles.input} readonly="readonly" required ref={emailRef} type="email" defaultValue={user?.email} />
                    </label>

                    <label style={styles.label}>
                        Address
                        <input style={styles.input} required ref={addressRef} type="text" placeholder='Enter Your Address' />
                    </label>

                    <label style={styles.label}>
                        Phone
                        <input style={styles.input} required ref={phoneRef} type="number" placeholder='Enter Your Phone number' />
                    </label>

                    <button style={styles.button} type="submit">Submit</button>

                </form>

            </Box>

        </>
    );
};

export default Parchase;

const styles = {
    label: {
        textAlign: 'start',
        display: 'block',
        width: '50%',
        fontSize: '20px',
        color: 'gray'
    },
    input: {
        display: 'block',
        width: '100%',
        height: '30px',
        fontSize: '16px',
        margin: '10px 0px',
        padding: '5px'
    },
    button: {
        color: 'black',
        backgroundColor: 'MediumSlateBlue',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 700
    }
}