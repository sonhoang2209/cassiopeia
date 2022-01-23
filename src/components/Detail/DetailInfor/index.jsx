import React, { useState } from 'react';

function DetailInfor(props) {

    const [quantity,setQuantity] = useState(props.data.quantity)

    const plus = () => {
        setQuantity(quantity + 1)
    }

    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    return (
        <div className='detail-infor__inner'>
            <h2 className='product-name'>{props.data.name}</h2>
            <div className='product-price'>
                {
                    props.data.offer !== 0 && <span>{props.data.price * ( 100 - props.data.offer ) / 100} $</span>
                }
                <span>{props.data.price} $</span>
                {
                    props.data.offer === 0 && <span></span>
                }
            </div>
            <div className='product-count detail-section'>
                <p className='label'>Count:</p>
                <div className='count-counter'>
                    <span className='icons-count' onClick={minus}>
                        <img alt='minus' src='https://cassiopeia.store/svgs/minus-i.svg' />
                    </span>
                    <span className='quantity'>{quantity}</span>
                    <span className='icons-count' onClick={plus}>
                        <img alt='plus' src='https://cassiopeia.store/svgs/plus-i.svg' />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DetailInfor;