import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <TopProducts></TopProducts>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;