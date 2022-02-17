import React,{ useEffect, useState } from 'react';
import Banners from '../components/Banner';
import SlideCard from '../components/SlideCard';
import axios from '../axios/config';
function Home(props) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await axios.get('/products')
            setProducts(products.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className='Home'>
            <Banners />
            <SlideCard title='New' data={products} catalog='/flowers/' />
            <SlideCard title='Relevant' data={products} />
        </div> 
    );
}

export default Home;