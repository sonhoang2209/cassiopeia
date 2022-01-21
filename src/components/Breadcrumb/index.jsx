import React from 'react';

import './breadcrumb.scss'

function Breadcrumb(props) {
    return (
        <div className='breadcrumb'>
            <nav>
                <a href='/' className='breadcrumb-tab'>Home</a>
                <a href={'/'+ props.type} className='breadcrumb-tab'>{props.type}</a>
            </nav>
        </div>
    );
}

export default Breadcrumb;