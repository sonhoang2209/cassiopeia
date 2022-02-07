import React,{ useEffect, useState } from 'react';
import ListProguct from '../components/Listproduct/ListProguct';
import { useSelector } from "react-redux";

function Flowers(props) {
    const type = props.type
    const [products, setProducts] = useState([])
    const pros = useSelector((store) => store.productReducer.products);

    const getProducts = async () => {
        const data = pros.filter((data) => data.category === type)
        setProducts(data);
    }
    console.log(pros);

    useEffect(() => {
        getProducts();
    },[type])

    return (
        <div className='flowers'>
            <ListProguct type={type} data={products} />
        </div>
    );
}

export default Flowers;