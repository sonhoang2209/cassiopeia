import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import ListCart from "../../../../CheckOut/ListCart"

function PreviewCart(props) {
    const [isOpen, setIsOpen] = useState(false)
    const carts = useSelector((store) => store.cartReducer.cart);
    return (
        <div className='preview-cart'>
            <div to='/checkout' className='sub-menu-btn' onClick={() => setIsOpen(!isOpen)}>
                {
                    carts.length > 0 && <span className='icon-numb'>{carts.length}</span>
                } 
                <span className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.68638 4.14285L5.35476 2.78357C5.09658 1.73512 4.17153 0.999938 3.11054 1H2V2.57142H3.11054C3.47355 2.56065 3.79474 2.80935 3.88175 3.16856L6.62725 14.5457L6.9126 15.7164C7.17282 16.7734 8.11035 17.5109 9.17995 17.4999H19.7378V15.9285H9.17995C8.81694 15.9393 8.49574 15.6906 8.40874 15.3314L8.3162 14.9385L19.7378 12.1964C20.5822 11.9964 21.246 11.3322 21.4576 10.4757L23 4.14285H5.68638ZM19.9923 10.0985C19.9209 10.3855 19.6973 10.6072 19.4139 10.6721L7.96144 13.4142L6.07198 5.71427H21.0643L19.9923 10.0985ZM5.85604 20.6428C5.85604 19.341 6.89189 18.2857 8.16967 18.2857C9.44745 18.2857 10.4833 19.341 10.4833 20.6428C10.4833 21.9446 9.44745 22.9999 8.16967 22.9999C6.89189 22.9999 5.85604 21.9446 5.85604 20.6428ZM7.39846 20.6428C7.39846 21.0767 7.74374 21.4285 8.16967 21.4285C8.59559 21.4285 8.94087 21.0767 8.94087 20.6428C8.94087 20.2089 8.59559 19.8571 8.16967 19.8571C7.74374 19.8571 7.39846 20.2089 7.39846 20.6428ZM15.2867 19.7408C15.6448 18.86 16.4884 18.2857 17.4242 18.2857C18.7019 18.2857 19.7378 19.341 19.7378 20.6428C19.7378 21.5962 19.1741 22.4557 18.3096 22.8205C17.445 23.1853 16.4499 22.9837 15.7882 22.3095C15.1265 21.6354 14.9285 20.6216 15.2867 19.7408ZM16.653 20.6428C16.653 21.0767 16.9982 21.4285 17.4242 21.4285C17.8501 21.4285 18.1954 21.0767 18.1954 20.6428C18.1954 20.2089 17.8501 19.8571 17.4242 19.8571C16.9982 19.8571 16.653 20.2089 16.653 20.6428Z" fill="black"/>
                    </svg>
                </span>
            </div>
            <div className={isOpen ? 'preview show' : 'preview hiden'}>
                <h2>Your cart</h2>
                <ListCart carts={carts} onClick />
            </div>
        </div>
    );
}

export default PreviewCart;