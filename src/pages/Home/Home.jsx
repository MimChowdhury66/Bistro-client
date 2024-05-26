import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Featured from '../Featured/Featured';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;