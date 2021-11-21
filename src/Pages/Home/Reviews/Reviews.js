import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://secure-inlet-19520.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Box sx={{ mx: 12 }}>
            <h2 style={{ color: 'midnightblue', margin: '30px 0px' }}>Review section</h2>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Grid>
        </Box>
    );
};

export default Reviews;