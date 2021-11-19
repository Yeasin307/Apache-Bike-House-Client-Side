import React from 'react';
import Carousel from 'react-material-ui-carousel'
import BannerItem from '../BannerItem/BannerItem';
import image1 from '../../../Images/image1.jpg';
import image2 from '../../../Images/image2.jpg';
import image3 from '../../../Images/image3.jpg';
import { Box } from '@mui/system';

const Banner = () => {
    const items = [
        { image: image1 },
        { image: image2 },
        { image: image3 }
    ]
    return (
        <Box style={{ height: "500px" }}>
            <Carousel>
                {
                    items.map((item, i) => <BannerItem key={i} item={item} />)
                }
            </Carousel>
        </Box>
    );
};

export default Banner;