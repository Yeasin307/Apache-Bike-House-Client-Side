import React from 'react';

const ExploreProduct = (props) => {
    const { name, img } = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <img style={{ width: "100%" }} src={img} alt="" />
        </div>
    );
};

export default ExploreProduct;