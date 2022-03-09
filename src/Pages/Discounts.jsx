import React from 'react';
import PageName from '../components/common/PageName';
import DiscountInner from '../components/Discount';

function Discounts(props) {
    return (
        <div className='discounts'>
            <PageName name='Discounts' />
            <DiscountInner />
        </div>
    );
}

export default Discounts;