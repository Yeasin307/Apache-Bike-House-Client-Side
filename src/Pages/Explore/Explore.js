import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
            {
                products.map(product => <ExploreProduct
                    key={product._id}
                    product={product}
                ></ExploreProduct>)
            }
        </div>
    );
};

export default Explore;