import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const styles = {
        box: {
            backgroundColor: 'black',
            color: 'goldenrod',
            paddingBottom: '20px'
        },
        h3: {
            textAlign: 'start',
            marginLeft: '90px'
        },
        p: {
            textAlign: 'start',
            margin: '5px 50px'
        }
    }
    return (
        <Box style={styles.box}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h3 style={styles.h3}>Contact Us</h3>
                    <p style={styles.p}>New Market , Maijdi Court</p>
                    <p style={styles.p}>Noakhali , Bangladesh</p>
                    <p style={styles.p}>Contact Number: 01700000000</p>
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