import React, { useState, useEffect } from 'react';
import DetailImage from './DetailImage';
import DetailInfor from './DetailInfor';
import './detail.scss'
import { useSelector } from "react-redux";

function Detail(props) {
    const [cart,setCart] = useState([])

    const pros = useSelector((store) => store.productReducer.products);

    const getProduct = async () => {
        const data = pros.filter((data) => data.id === props.id)
        setCart(data[0]);
    }

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.id])


    return (
        <div className='detail'>
            <div className='detail-image'>
                <DetailImage data={cart} />
            </div>
            <div className='detail-infor'>
                <DetailInfor data={cart} />
            </div>
        </div>
    );
}

export default Detail;