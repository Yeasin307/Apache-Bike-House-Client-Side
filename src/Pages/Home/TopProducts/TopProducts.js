import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TopProduct from '../TopProduct/TopProduct';

const TopProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let isMounted = true;

        fetch('https://secure-inlet-19520.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setProducts(data);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [])
    return (
        <Box>
            <Typography style={{ color: 'MidnightBlue', fontWeight: 700 }} variant="h5">Top Products</Typography>
            <Box style={{ margin: "20px 50px" }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products.slice(1, 7).map(product => <TopProduct
                            key={product._id}
                            product={product}
                        ></TopProduct>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default TopProducts;