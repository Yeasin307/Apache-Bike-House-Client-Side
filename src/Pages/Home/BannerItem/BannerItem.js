import React from 'react';
import { Box } from '@mui/system';

const BannerItem = (props) => {
    const { image } = props.item;
    return (
        <Box style={{ height: "450px" }} >
            <img style={{ height: "100%", width: "100%" }} src={image} alt="" />
        </Box>
    );
};

export default BannerItem;