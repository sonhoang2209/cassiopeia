import React from 'react';
import ListCard from '../ListCard'

function ListProguct(props) {
    return (
        <div className='list-product'>
            
                <div className='list-product-inner'>
                    <ListCard type={props.type} data={props.data} />
                </div>
        </div>
    );
}

export default ListProguct;