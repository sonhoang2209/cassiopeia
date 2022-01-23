import React from 'react';
import {  useParams,useLocation } from "react-router-dom";

import Breadcrumb from '../components/Breadcrumb';
import Detail from '../components/Detail';

function DetailProduct(props) {
    let { id } = useParams();
    const { state } = useLocation();
    const { data } = state;
    return (
        <div className='detail-product'>
            <div className='container'>
                <Breadcrumb type={props.type} nameProduct={data.name} id={id} />
                <div className='detail-inner'>
                    <Detail data={data} />
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;