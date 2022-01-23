import React from 'react';
import './card.scss'
import { ButtonIcon } from '../Button';
import { useNavigate } from "react-router-dom";

function Card(props) {
    let navigate = useNavigate();

    const addToCart = (data) => () => {
        console.log('add to card ' + data);
    }

    const clickProduct = (data) => () => {
        navigate(`/${data.category}s/${data.id}`,{state: { data: data }})
    };
    
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-thumbnail'>
                    <div className='thumbnail'>
                        <img className='image' alt={props.data.name} src={props.data.thumbnail} />   
                    </div>
                    <div className='thumbnail-overlay'>
                        <div onClick={addToCart(props.data.id)}>
                            <ButtonIcon cart />
                        </div>
                        <div onClick={clickProduct(props.data)}>
                            <ButtonIcon />
                        </div>
                    </div>
                </div>
                <div className='card-content'>
                    <a className='link card-title' href={'/product/'+props.data.id} >
                        <span>{props.data.name }</span>
                    </a>
                    <p className='card-price'>
                        <span>$ {props.data.price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;