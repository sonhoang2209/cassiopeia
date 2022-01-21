import React from 'react';
import Breadcrumb from '../Breadcrumb'
import ListCard from '../ListCard'

function ListProguct(props) {
    return (
        <div className='list-product'>
            <div className='container'>
                <div className='list-product-inner'>
                    <Breadcrumb type={props.type} />
                    <div className='page-name' style={{fontSize:32}}>
                        {props.type}
                    </div>
                    <ListCard type={props.type} data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default ListProguct;