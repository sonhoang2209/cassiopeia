import React,{ useEffect, useState } from 'react';
import ListProguct from '../components/Listproduct/ListProguct';
import axios from '../axios/config';

function Flowers(props) {
    const type = props.type
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await axios.get('/products')
            const data = products.data.filter((data) => data.category === type)
            setProducts(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProducts()
    },[type])

    return (
        <div className='flowers'>
            <ListProguct type={type} data={products} />
        </div>
    );
}

export default Flowers;