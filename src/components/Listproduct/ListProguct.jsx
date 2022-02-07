import React from 'react';
import Breadcrumb from '../Breadcrumb'
import ListCard from '../ListCard'
import PageName from '../common/PageName';

function ListProguct(props) {
    return (
        <div className='list-product'>
            <div className='container'>
                <div className='list-product-inner'>
                    <Breadcrumb />
                    <PageName name={props.type} />
                    <ListCard type={props.type} data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default ListProguct;