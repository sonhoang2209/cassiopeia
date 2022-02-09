import React from 'react';

function ListCart(props) {
    const deleteCart = (data) => () => {
        props.onClick(data);
    }

    return (
        <div className='list-cart'>
            {
                props.carts?.map((item,index) => {
                    return (
                        <div className='cart-item' key={index}>
                            <div className='cart-item__thumbnail'>
                                <img width={100} height={100} alt='thumbnail' src={item.thumbnail} />
                            </div>
                            <div className='cart-item__content'>
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
        </div>
    );
}

export default ListCart;