import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from '../Pages/Home';
import Header from '../components/Header';
import Flowers from '../Pages/Flowers';
import DetailProduct from '../Pages/DetailProduct';


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
            </Routes>
            
        </>
    );
}

export default AppNavigation;