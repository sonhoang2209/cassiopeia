import React from 'react';
import { useNavigate } from 'react-router-dom';

import './breadcrumb.scss'

function Breadcrumb(props) {
    const navigate = useNavigate();

    const clickBreadcrumb = (data) => () => {
        navigate(data)
    }

    return (
        <div className='breadcrumb'>
            <nav>
                <span onClick={clickBreadcrumb('/')} className='breadcrumb-tab'>Home</span>
                {
                    props.nameProduct ? <span onClick={clickBreadcrumb('/'+ props.type+'s')} className='breadcrumb-tab'>{props.type+'s'}</span> : <span className='breadcrumb-tab'>{props.type+'s'}</span>
                }
                {
                    props.nameProduct && <span className='breadcrumb-tab'>{props.nameProduct}</span>
                }
            </nav>
        </div>
    );
}

export default Breadcrumb;