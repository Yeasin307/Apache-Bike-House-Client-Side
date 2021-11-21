import { Grid, Paper } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2 style={{ color: 'midnightblue', marginBottom: '5px' }}>About Us</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ width: '75%', m: 5, p: 3, color: 'gray', fontWeight: 500 }} elevation={20} >
                        <h3>Our History</h3>
                        <p>ACI Motors became the distributor of YAMAHA Motorcycles in 2016. ACI Motors brings the best of YAMAHA, meeting the demand of the people - the sporty FAZER FI, YZF R15 and FZS FI, designed with excellent ergonomics for the adventurous with comfortable riding position and seat ensuring the rider can enjoy a weekend getaway or head off on a touring holiday; the befitting family bikes SALUTO Disc and SALUTO Drum, designed with a priority on fuel economy and practicality; and SZ-RR for the 'Powerful and Stylish Commuter'.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ width: '75%', m: 5, p: 3, color: 'gray', fontWeight: 500 }} elevation={20} >
                        <h3>Our Mission</h3>
                        <p>ACI's Mission is to enrich the quality of life of the people through responsible application of knowledge, technology and skills. ACI is committed to the pursuit of excellence through world-class products, innovative processes and empowered employees, to provide the highest level of satisfaction to our customers.Provide products and services of high and consistent quality, ensuring value for money to our customers.Endeavour to attain a position of leadership in each category of our businesses.</p>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
};

export default AboutUs;