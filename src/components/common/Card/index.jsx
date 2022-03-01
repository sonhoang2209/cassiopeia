import React from 'react';
import './card.scss'
import { ButtonIcon } from '../Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Card(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const data = props.data

    const addToCart = (data) => () => {
        dispatch({ type: "ADD_TO_CART", data: { ...data, quantity: 1 , colorPicker: data.color?.[0] } })
    }

    const clickProduct = (data) => () => {
        navigate(`/${data.category}s/${data.id}`)
    };

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className={data.category === 'flower' ? 'card-thumbnail card-thumbnail-pd' : 'card-thumbnail' }>
                    <div className='thumbnail'>
                        <img className='image' alt={data.name} src={data.thumbnail} />
                    </div>
                    <div className='thumbnail-overlay'>
                        <div onClick={addToCart(data)}>
                            <ButtonIcon cart id={data.id} />
                        </div>
                        <div id={data.id} onClick={clickProduct(data)}>
                            <ButtonIcon />
                        </div>
                    </div>
                </div>
                <div className='card-content'>
                    <span className='link card-title' onClick={clickProduct(data)} >
                        <span>{data.name}</span>
                    </span>
                    <p className='card-price'>
                        {
                            data.offer !== 0 && <span>{data.price * (100 - data.offer) / 100} $</span>
                        }
                        <span>{data.price} $</span>
                        {
                            data.offer === 0 && <span></span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;