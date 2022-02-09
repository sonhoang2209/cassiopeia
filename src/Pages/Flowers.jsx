import React,{ useEffect, useState } from 'react';
import ListProguct from '../components/Listproduct/ListProguct';
import { useSelector } from "react-redux";
import PageName from '../components/common/PageName';
import Breadcrumb from '../components/Breadcrumb';

function Flowers(props) {
    const type = props.type
    const [products, setProducts] = useState([])
    const pros = useSelector((store) => store.productReducer.products);

    const getProducts = async () => {
        const data = pros.filter((data) => data.category === type)
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type])

    const pageName = `${type}s`

    return (
        <div className='flowers'>
            <div className='container'>
                <Breadcrumb />
                <PageName name={pageName} />
                <ListProguct type={type} data={products} />
            </div>
            
        </div>
    );
}

export default Flowers;