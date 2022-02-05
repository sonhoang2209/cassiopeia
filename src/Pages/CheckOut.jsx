import React from 'react';
import CheckOutInner from '../components/CheckOut';

function CheckOut(props) {
    return (
        <div className='check-out'>
            <div className='container'>
                <div className='page-name' style={{fontSize:32}}>
                    {props.type}
                </div>
                <CheckOutInner />
            </div>
        </div>
    );
}

export default CheckOut;