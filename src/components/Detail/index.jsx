import React, { useState } from 'react';
import DetailImage from './DetailImage';
import DetailInfor from './DetailInfor';
import './detail.scss'

function Detail(props) {
    const [cart,setCart] = useState({...props.data, "quantity": 1})
    // console.log(cart)
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