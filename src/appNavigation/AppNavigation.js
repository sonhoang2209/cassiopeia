import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from '../Pages/Home';
import Header from '../components/Header';
import Flowers from '../Pages/Flowers';
import DetailProduct from '../Pages/DetailProduct';
import CheckOut from '../Pages/CheckOut';
import About from '../Pages/About';


function AppNavigation(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flowers" element={<Flowers type="flower" />} />
                <Route path="/flowers/:id" element={<DetailProduct type='flower' />} />
                <Route path="/plants" element={<Flowers type="plant" />} />
                <Route path="/plants/:id" element={<DetailProduct type='plant' />} />
                <Route path="/gifts" element={<Flowers type="gift" />} />
                <Route path="/gifts/:id" element={<DetailProduct type='gift' />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/about-us" element={<About />} />
            </Routes>
        </>
    );
}

export default AppNavigation;