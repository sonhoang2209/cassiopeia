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
import FlowersNavigation from './FlowersNavigation';
import Breadcrumb from '../components/Breadcrumb';
import Login from '../components/Login';
import AboutUs from '../Pages/AboutUs';
import Discounts from '../Pages/Discounts';

function AppNavigation(props) {
    return (
        <>
            <Header />
            <div className='container'>
                <Breadcrumb />
            </div>
            <div className='container' style={{marginBottom:30}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/discounts" element={<Discounts />} />
                    <Route path='/' element={<FlowersNavigation />} >
                        <Route path='flowers' index element={<Flowers type="flower" />} />
                        <Route path='flowers/:id' element={<DetailProduct type='flower' />} />
                    </Route>
                    <Route path='/' element={<FlowersNavigation />} >
                        <Route path='plants' index element={<Flowers type="plant" />} />
                        <Route path='plants/:id' element={<DetailProduct type='plant' />} />
                    </Route>
                    <Route path='/' element={<FlowersNavigation />} >
                        <Route path='gifts' index element={<Flowers type="gift" />} />
                        <Route path='gifts/:id' element={<DetailProduct type='gift' />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Login signup />} />
                </Routes>
            </div>
        </>
    );
}

export default AppNavigation;