import React,{useState, useEffect} from 'react';
import SlideCard from '../SlideCard';

import {getProductFB} from '../../firebase/product.firebase'

function DiscountInner(props) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await getProductFB()
            setProducts(products.filter(e => e.offer > 0));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts()
    },[])
    
    return (
        <div className='discount-inner'>
            <SlideCard title='Special offers' data={products} discount />
        </div>
    );
}

export default DiscountInner;