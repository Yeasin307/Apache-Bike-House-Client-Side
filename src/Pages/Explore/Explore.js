import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secure-inlet-19520.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Box style={{ margin: "50px" }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products.map(product => <ExploreProduct
                            key={product._id}
                            product={product}
                        ></ExploreProduct>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Explore;