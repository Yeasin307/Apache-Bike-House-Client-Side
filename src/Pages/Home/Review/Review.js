import { Grid, Paper } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    return (
        <Grid item xs={6} md={4}>

            <Paper style={{ padding: '10px', textAlign: 'start' }} elevation={3} >
                <h4 style={{ margin: '5px 0px' }}>Name : {review.name}</h4>
                <h4 style={{ margin: '5px 0px' }}>Email : {review.email}</h4>
                <h4 style={{ margin: '5px 0px' }}>Ratings : {review.rating}</h4>
                <h4 style={{ margin: '5px 0px' }}>Comment : {review.comment}</h4>
            </Paper>
        </Grid>
    );
};

export default Review;