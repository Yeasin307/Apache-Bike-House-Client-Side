import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';

const ExploreProduct = (props) => {
    const { name, img } = props.product;
    return (
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '75%', p: 1 }} elevation={3} >
                <img style={{ width: "100%" }} src={img} alt="Apache Bike" />
                <h2 style={{ color: "blue" }}>{name}</h2>
                <ul style={{ marginLeft: "20px" }}>
                    <li style={{ textAlign: 'start' }}>feature 1</li>
                    <li style={{ textAlign: 'start' }}>feature 2</li>
                    <li style={{ textAlign: 'start' }}>feature 3</li>
                </ul>
                <Button variant="contained" color="warning">
                    Parchase
                </Button>
            </Paper>
        </Grid>
    );
};

export default ExploreProduct;