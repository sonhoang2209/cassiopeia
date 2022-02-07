import React from 'react';
import CheckOutInner from '../components/CheckOut';
import PageName from '../components/common/PageName';
import Breadcrumb from '../components/Breadcrumb';

function CheckOut(props) {
    return (
        <div className='check-out'>
            <div className='container'>
                <Breadcrumb />
                <PageName name='Checkout' />
                <CheckOutInner />
            </div>
        </div>
    );
}

export default CheckOut;