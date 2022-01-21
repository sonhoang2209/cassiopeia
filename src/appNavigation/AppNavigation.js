import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from '../Pages/Home';
import Header from '../components/Header';
import Flowers from '../Pages/Flowers';


function AppNavigation(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flowers" element={<Flowers />} />
            </Routes>
            
        </>
    );
}

export default AppNavigation;