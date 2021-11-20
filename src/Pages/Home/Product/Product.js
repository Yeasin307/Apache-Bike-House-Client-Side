import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { name, img, description } = props.product;
    const { feature1, feature2, feature3 } = description;
    return (
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '75%', p: 1 }} elevation={20} >
                <img style={{ width: "100%", backgroundColor: 'lightgray', borderRadius: '5px 5px 0px 0px' }} src={img} alt="Apache Bike" />
                <h4 style={{ color: "#334d4d", margin: '5px 0px' }}>{name}</h4>
                <ul style={{ color: 'gray', marginLeft: "20px", textAlign: 'start' }}>
                    <p style={{ fontSize: '18px', margin: '5px 0px' }}>Key Features</p>
                    <li>{feature1}</li>
                    <li>{feature2}</li>
                    <li>{feature3}</li>
                </ul>
                <NavLink to="/parchase" style={{ textDecoration: 'none' }}>
                    <Button sx={{ bgcolor: 'warning.main', mb: 2 }} variant="contained">Buy Now</Button>
                </NavLink>
            </Paper>
        </Grid>
    );
};

export default Product;