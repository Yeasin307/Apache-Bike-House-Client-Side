import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Box>
            <Typography style={{ color: 'MidnightBlue', fontWeight: 700 }} variant="h5">Explore Products</Typography>
            <Box style={{ margin: "20px 50px" }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products.slice(1, 7).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default Products;