import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import CuponBanner from './CuponBanner/CuponBanner';
import DailyDiscovery from './DailyDiscovery/DailyDiscovery';
import FlashDeals from './FlashDeals/FlashDeals';
import MallBanner from './MallBanner/MallBanner';
import Navbar from './Navbar/Navbar';
import OfferProduct from './OfferProduct/OfferProduct';
import SpecialCategory from './SpecialCategory/SpecialCategory';
import TopProducts from './TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <SpecialCategory/>
            <CuponBanner/>
            <OfferProduct/>
            <Categories/>
            <FlashDeals/>
            <MallBanner/>
            <TopProducts/>
            <DailyDiscovery/>
        </div>
    );
};

export default Home;