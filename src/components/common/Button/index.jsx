import React from 'react';
import './button.scss'
import { useSelector } from 'react-redux';

export default function ButtonArrow(props) {
    return (
        <a href={props.link} className='btn-link'>
            <div className={props.black ? 'btn-arrow btn-black btn' : 'btn-arrow btn-white btn'}>
                <span>{props.text}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z" fill="black" />
                </svg>
            </div>
        </a>
    );
}

export function ButtonIcon(props) {
    const carts = useSelector((store) => store.cartReducer.cart)
    const inCart = carts.filter(x => x.id === props.id).length
    return (
        <span className='btn btn-icon'>
            {
                props.id && inCart > 0 && <span className='in-cart'><img alt='in cart' src='https://cassiopeia.store/svgs/check-solid.svg' /></span>
            }
            <img alt='' src={ props.cart ? 'https://cassiopeia.store/svgs/cart-btn.svg' : 'https://cassiopeia.store/svgs/view-btn.svg' } />
        </span>
    )
}

export function ButtonDefault(props) {
    return (
        <span className='btn-link btn-default'>
            <div className={props.black ? 'btn-arrow btn-black btn' : 'btn-arrow btn-white btn'}>
                <span>{props.text}</span>
            </div>
        </span>
    )
}