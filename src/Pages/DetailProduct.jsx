import React,{useState,useEffect} from 'react';
import {  useParams,useLocation } from "react-router-dom";

import Breadcrumb from '../components/Breadcrumb';
import Detail from '../components/Detail';
import SlideCard from '../components/SlideCard';
import { useSelector } from "react-redux";

function DetailProduct(props) {
    const { id } = useParams();
    const { state } = useLocation();
    const {data}= state;

    const pros = useSelector((store) => store.productReducer.products);

    return (
        <div className='detail-product'>
            <div className='container'>
                <Breadcrumb type={props.type} nameProduct={data.name} id={id} />
                <div className='detail-inner'>
                    <Detail id ={id}/>
                </div>
                <SlideCard title='You may like' data={pros} catalog='/flowers/' />
            </div>
        </div>
    );
}

export default DetailProduct;