import React from 'react';
import { Grid, Paper, Typography, Rating } from '@mui/material';

const Review = ({ review }) => {

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper style={{ padding: '10px', textAlign: 'center' }} elevation={3} >
                <img style={{ width: '40%', height: '120px', borderRadius: '100%' }} src={`data:image/png;base64,${review.img}`} alt="" />
                <Typography sx={{ fontSize: 18, fontWeight: 'bold', mt: 1 }}>{review.name}</Typography>
                <Rating sx={{ my: 1.5, display: 'flex', justifyContent: 'center' }} value={parseFloat(review.rating)} precision={0.5} readOnly />
                <Typography sx={{ fontSize: 18 }}>Comment : {review.comment}</Typography>
            </Paper>
        </Grid>
    );
};

export default Review;