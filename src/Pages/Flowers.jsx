import React,{ useEffect, useState } from 'react';
import ListProguct from '../components/Listproduct/ListProguct';
import axios from '../axios/config';

function Flowers(props) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await axios.get('/products')
            setProducts(products.data.filter((data,index) => data.category === "flower"));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className='flowers'>
            <ListProguct type='flowers' data={products} />
        </div>
    );
}

export default Flowers;