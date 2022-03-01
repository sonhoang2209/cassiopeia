import React from 'react';
import { useDispatch } from 'react-redux';
import CheckoutFeild from './CheckOutField';

function ListCart(props) {
    const dispactch = useDispatch();
    const deleteCart = (data) => () => {
        dispactch({ type: 'REMOVE_CART', data: data })
    }

    return (
        <div className='list-cart'>
            {
                props.carts?.map((item,index) => {
                    return (
                        <div className='cart-item' key={index}>
                            <div className='cart-item-thumbnail'>
                                <img width={100} height={100} alt='thumbnail' src={item.thumbnail} />
                            </div>
                            <div className='cart-item-content'>
                                <div className='infor'>
                                    <span>{item.name}</span>
                                    <span className='price'>${item.price * ( 1 - item.offer / 100 )}</span>
                                    <div className='delete' onClick={deleteCart(item)}>
                                        <img alt='delete' src='https://cassiopeia.store/svgs/delete-i.svg' />
                                    </div>
                                </div>
                                <div className='total-group'>
                                    <span className='quantity'>Quantity:<span>{item.quantity}</span></span>
                                    {
                                        item.quantity > 1 && <span className='total'>$<span>{item.quantity * item.price * ( 1 - item.offer / 100 )}</span></span>
                                    }
                                </div>
                                {item.colorPicker && <span className='color'>Color: <span style={{background:item.colorPicker.color, color:"#ccc", padding:1}}>{item.colorPicker.name}</span></span>}
                            </div>
                        </div>
                    )
                })
            }
            {props.carts?.length <= 0 && (
                <div style={{textAlign:'center'}}>
                    <h4>Your cart is empty</h4>
                    <p>Next step: add a product to your cart</p>
                </div>
            )}
            <CheckoutFeild />
        </div>
    );
}

export default ListCart;