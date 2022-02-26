import { Alert, Input, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState(null);
    const [rating, setRating] = useState(null);
    const nameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();

    const handleProductAdd = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = commentRef.current.value;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('comment', comment);
        formData.append('rating', rating);
        formData.append('img', image);

        fetch('https://secure-inlet-19520.herokuapp.com/review', {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
    }

    return (
        <>
            <Box sx={{ my: 10 }}>

                <Typography sx={{ color: 'blue', fontWeight: 500 }} variant="h5" gutterBottom>
                    Please Give Us Your Review
                </Typography>

                <form onSubmit={handleProductAdd} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                    <label style={styles.label}>
                        Name
                        <input style={styles.input} required ref={nameRef} type="text" defaultValue={user?.displayName} />
                    </label>

                    <label style={styles.label}>
                        Email
                        <input style={styles.input} required ref={emailRef} type="text" defaultValue={user?.email} />
                    </label>

                    <label style={styles.label}>
                        Photo
                        <Input style={{ width: '100%', height: '100%', fontSize: '16px', margin: '10px 0px', padding: '5px' }} required onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" />
                    </label>

                    <label style={{ fontSize: '20px', color: 'gray', display: 'flex', flexDirection: 'column' }}>
                        Ratings
                        <Rating
                            name="simple-controlled"
                            size='large'
                            value={rating}
                            precision={0.5}
                            onChange={(e, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </label>

                    <label style={styles.label}>
                        Comment
                        <textarea style={styles.input} required ref={commentRef} type="text" placeholder='Enter Your Comment' />
                    </label>

                    <button style={styles.button} type="submit">Submit</button>

                </form>
                {success && <Alert severity="success">Thanks for review us.</Alert>}
            </Box>
        </>
    );
};

export default AddReview;

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
        height: '40px',
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