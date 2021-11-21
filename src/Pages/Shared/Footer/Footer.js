import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: 'black', color: 'goldenrod', paddingBottom: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h3 style={{ textAlign: 'start', marginLeft: '90px' }}>Contact Us</h3>
                    <p style={{ textAlign: 'start', margin: '5px 50px' }}>New Market , Maijdi Court</p>
                    <p style={{ textAlign: 'start', margin: '5px 50px' }}>Noakhali , Bangladesh</p>
                    <p style={{ textAlign: 'start', margin: '5px 50px' }}>Contact Number: 01700000000</p>
                </Grid>
                <Grid item xs={6}>
                    <h3>Join with us</h3>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "blue", marginLeft: ' 25px' }} icon={faFacebook} size="2x" />
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "red", marginLeft: '20px' }} icon={faYoutube} size="2x" />
                    </a>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;