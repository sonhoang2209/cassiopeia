import React from 'react';
import {  useParams } from "react-router-dom";

import Breadcrumb from '../components/Breadcrumb';
import Detail from '../components/Detail';
import SlideCard from '../components/SlideCard';
import { useSelector } from "react-redux";

function DetailProduct(props) {
    const { id } = useParams();
    const pros = useSelector((store) => store.productReducer.products);

    return (
        <div className='detail-product'>
            <div className='container'>
                <Breadcrumb />
                <div className='detail-inner'>
                    <Detail id ={id}/>
                </div>
                <SlideCard title='You may like' data={pros} catalog='/flowers/' />
            </div>
        </div>
    );
}

export default DetailProduct;