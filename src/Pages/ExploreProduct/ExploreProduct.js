import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ExploreProduct = (props) => {
    const { name, img, description, price, _id } = props.product;
    const { feature1, feature2, feature3 } = description;
    return (
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '75%', p: 1 }} elevation={10} >
                <img style={{ width: "100%", backgroundColor: 'lightgray', borderRadius: '5px 5px 0px 0px' }} src={img} alt="Apache Bike" />
                <h2 style={{ color: "#334d4d", margin: "5px" }}>{name}</h2>
                <ul style={{ color: 'gray', marginLeft: "20px", marginTop: '5px', textAlign: 'start' }}>
                    <p style={{ fontSize: '18px', margin: '5px 0px' }}>Key Features</p>
                    <li>{feature1}</li>
                    <li>{feature2}</li>
                    <li>{feature3}</li>
                </ul>
                <h2 style={{ color: "black", margin: "5px", paddingBottom: "5px" }}>Price: {price}</h2>
                <NavLink to={`/explore/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ bgcolor: 'warning.main', mb: 2 }} variant="contained">Buy Now</Button>
                </NavLink>
            </Paper>
        </Grid>
    );
};

export default ExploreProduct;