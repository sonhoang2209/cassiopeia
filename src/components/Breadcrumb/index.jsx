import React from 'react';

import './breadcrumb.scss'

function Breadcrumb(props) {
    return (
        <div className='breadcrumb'>
            <nav>
                <a href='/' className='breadcrumb-tab'>Home</a>
                <a href={'/'+ props.type+'s'} className='breadcrumb-tab'>{props.type+'s'}</a>
                {
                    props.nameProduct && <a href={'/'+ props.type+'s/'+ props.id} className='breadcrumb-tab'>{props.nameProduct}</a>
                }
            </nav>
        </div>
    );
}

export default Breadcrumb;