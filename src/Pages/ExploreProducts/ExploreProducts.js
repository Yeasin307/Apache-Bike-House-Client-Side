import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import Navigation from '../Shared/Navigation/Navigation';
import { Typography } from '@mui/material';
import Footer from '../Shared/Footer/Footer';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secure-inlet-19520.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Typography variant="h5" sx={{ color: 'MidnightBlue', fontWeight: 700, mt: 10, mb: 3 }}>Explore All Products</Typography>
            <Box style={{ margin: "20px 50px" }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products.map(product => <ExploreProduct
                            key={product._id}
                            product={product}
                        ></ExploreProduct>)
                    }
                </Grid>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;