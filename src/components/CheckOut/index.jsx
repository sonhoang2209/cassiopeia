import React, {useState} from 'react';
import ListCart from './ListCart';
import './checkout.scss'
import { useSelector, useDispatch } from 'react-redux';

function CheckOutInner(props) {
    const [orderTotal,setOrderTotal] = useState(0)
    const dispactch = useDispatch();
    const carts = useSelector((store) => store.cartReducer.cart);

    React.useEffect(() => {
        let total = 0
        carts.forEach(element => {
            total = total + element.price * ( 1 - element.offer / 100 ) * element.quantity
        });
        setOrderTotal(total)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carts]);

    const deleteCart = (data) => {
        dispactch({ type: 'REMOVE_CART', data: data })
    }

    return (
        <div className='check-out__inner '>
            <div className='block-left checkout__content'>
                
            </div>
            <div className='block-left checkout__order'>
                <div className="checkout__order-name">Order total <span>({carts.length})</span></div>
                <ListCart carts={carts} onClick={deleteCart} />
                <div className='checkout__field-container'>
                    <div className="checkout__field"><span>Shipping</span><span>FREE</span></div>
                    <div className="checkout__field"><span>Promocode</span><span>$0.00</span></div>
                    <div className="checkout__field"><span>Total</span><span>${orderTotal}</span></div>
                </div>
            </div>
        </div>
    );
}

export default CheckOutInner;