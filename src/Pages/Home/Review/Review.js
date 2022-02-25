import { Grid, Paper } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {

    const styles = {
        h4: {
            margin: '5px 0px'
        }
    }

    return (
        <Grid item xs={6} md={4}>

            <Paper style={{ padding: '10px', textAlign: 'start' }} elevation={3} >
                <h4 style={styles.h4}>Name : {review.name}</h4>
                <h4 style={styles.h4}>Email : {review.email}</h4>
                <h4 style={styles.h4}>Ratings : {review.rating}</h4>
                <h4 style={styles.h4}>Comment : {review.comment}</h4>
            </Paper>
        </Grid>
    );
};

export default Review;