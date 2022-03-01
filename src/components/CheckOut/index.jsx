import React, {useState} from 'react';
import ListCart from './ListCart';
import './checkout.scss'
import { useSelector } from 'react-redux';

function CheckOutInner(props) {
    
    const carts = useSelector((store) => store.cartReducer.cart);

    return (
        <div className='check-out-inner '>
            <div className='block-left checkout-content'>
                
            </div>
            <div className='block-left checkout-order'>
                <div className="checkout-order-name">Order total <span>({carts.length})</span></div>
                <ListCart carts={carts} />
                
            </div>
        </div>
    );
}

export default CheckOutInner;