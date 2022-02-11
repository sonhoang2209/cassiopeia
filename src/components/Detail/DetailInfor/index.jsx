import React, { useState } from 'react';
import { ButtonDefault, ButtonIcon } from '../../common/Button';

import Accordion from '../../Accordion';
import { useDispatch } from "react-redux";

const accordion = [
    {
        "title":"Bouquet contents",
        "content":"No content yet"
    },
    {
        "title":"Includes",
        "content":"No content yet"
    },
    {
        "title":"Delivery & Pay policy",
        "content":"Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible."
    }
]

function DetailInfor(props) {
    const [quantity,setQuantity] = useState(1)
    const [color, setColor ] = useState(0)
    const dispatch = useDispatch();

    const clickColor = (data) => () => {
        setColor(data)
    }

    const plus = () => {
        setQuantity(quantity + 1)
    }

    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const addToCart = (data) => () => {
        dispatch({ type: "ADD_TO_CART", data: { ...data, quantity: quantity , colorPicker: data.color?.[color] } })
    }

    const renderColor = ()  => {
        return  props.data.color?.map((item, index)=> (
            <div key={index} className={index === color ? 'color-item active' :'color-item'} onClick={clickColor(index)} >
                <div style={{backgroundColor: item.color}}></div>
            </div>
        ))
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
                    <span className={ quantity===1 ? 'icons-count disnable' : 'icons-count' } onClick={minus}>
                        <img alt='minus' src='https://cassiopeia.store/svgs/minus-i.svg' />
                    </span>
                    <span className='quantity'>{quantity}</span>
                    <span className='icons-count' onClick={plus}>
                        <img alt='plus' src='https://cassiopeia.store/svgs/plus-i.svg' />
                    </span>
                </div>
            </div>
            <div className='product-color detail-section'>
                <p className='label'>Color:</p>
                <div className='color-picker'>
                    {
                        props.data.color?.length !== 0 && renderColor()
                    }
                </div>
            </div>
            <div className='product-button-group detail-section'>
                <div className='button-group'>
                    <ButtonDefault black text="Order now" />
                    <span onClick={addToCart(props.data)}>
                        <ButtonIcon cart />
                    </span>
                    
                </div>
            </div>
            <div className='product-color detail-section '>
                <div className='accordion'>
                    {
                        accordion.map((i,index)=> {
                            return <Accordion data={i} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailInfor;