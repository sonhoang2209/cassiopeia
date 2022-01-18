import React from 'react';
import './card.scss'
import { ButtonIcon } from '../Button';

function Card(props) {

    const addToCart = (data) => () => {
        console.log('add to card ' + data);
    }
    
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
                        <div href={'/products/'+ props.data.id}>
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