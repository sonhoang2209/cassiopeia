import React,{useState} from 'react';
import { useSelector } from 'react-redux';

function CheckoutFeild(props) {
    const [orderTotal,setOrderTotal] = useState(0)
    
    const carts = useSelector((store) => store.cartReducer.cart);

    React.useEffect(() => {
        let total = 0
        carts.forEach(element => {
            total = total + element.price * ( 1 - element.offer / 100 ) * element.quantity
        });
        setOrderTotal(total)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carts]);
    return (
        <div className='checkout-field-container'>
            <div className="checkout-field"><span>Shipping</span><span>FREE</span></div>
            <div className="checkout-field"><span>Promocode</span><span>$0.00</span></div>
            <div className="checkout-field"><span>Total</span><span>${orderTotal}</span></div>
        </div>
    );
}

export default CheckoutFeild;