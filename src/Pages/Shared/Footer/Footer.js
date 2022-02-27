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
        contact: {
            textAlign: 'center',
        },
        h3: {
            marginTop: '45px'
        }
    }
    return (
        <Box style={styles.box}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} >
                    <h3 style={styles.h3}>Join with us</h3>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "blue", marginLeft: ' 2px' }} icon={faFacebook} size="2x" />
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "red", marginLeft: '20px' }} icon={faYoutube} size="2x" />
                    </a>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <h3 style={styles.contact}>Contact Us</h3>
                    <p style={styles.contact}>New Market , Maijdi Court</p>
                    <p style={styles.contact}>Noakhali , Bangladesh</p>
                    <p style={styles.contact}>Contact Number: 01700000000</p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;