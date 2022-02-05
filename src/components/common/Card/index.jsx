import React, { useState } from 'react';
import './card.scss'
import { ButtonIcon } from '../Button';
import { useNavigate } from "react-router-dom";

function Card(props) {
    let navigate = useNavigate();
    const [data, setData] = useState(props.data)

    const addToCart = (data) => () => {
        console.log('add to card ' + data);
    }

    const clickProduct = (data) => () => {
        navigate(`/${data.category}s/${data.id}`, { state: { data: data } })
    };

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-thumbnail'>
                    <div className='thumbnail'>
                        <img className='image' alt={data.name} src={data.thumbnail} />
                    </div>
                    <div className='thumbnail-overlay'>
                        <div onClick={addToCart(data.id)}>
                            <ButtonIcon cart />
                        </div>
                        <div onClick={clickProduct(data)}>
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