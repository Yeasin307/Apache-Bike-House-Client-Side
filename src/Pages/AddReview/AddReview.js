import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const ratingsRef = useRef();
    const commentRef = useRef();

    const handleProductAdd = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const rating = ratingsRef.current.value;
        const comment = commentRef.current.value;
        const review = { name, email, rating, comment };

        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Successfully Added.')
                    setSuccess(true);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ my: 10 }}>

                <Typography sx={{ color: 'blue', fontWeight: 500 }} variant="h5" gutterBottom>
                    Please Give Us Your Review
                </Typography>

                <form onSubmit={handleProductAdd} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Name
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={nameRef} type="text" defaultValue={user?.displayName} />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Email
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={emailRef} type="text" defaultValue={user?.email} />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Ratings
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={ratingsRef} type="text" placeholder='Enter Your Ratings out of 5' />
                    </label>

                    <label style={{ textAlign: 'start', display: 'block', width: '50%', fontSize: '20px', color: 'gray' }}>
                        Comment
                        <input style={{ display: 'block', width: '100%', height: '30px', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required ref={commentRef} type="text" placeholder='Enter Your Comment' />
                    </label>

                    <button style={{ color: 'black', backgroundColor: 'MediumSlateBlue', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', fontWeight: 700 }} type="submit">Submit</button>

                </form>
                {success && <Alert severity="success">Thanks for review us.</Alert>}
            </Box>
        </>
    );
};

export default AddReview;