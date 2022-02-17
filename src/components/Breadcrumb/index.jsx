import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link, useParams } from 'react-router-dom';

import './breadcrumb.scss'

function Breadcrumb(props) {
    let location = useLocation();
    let { id } = useParams();

    const product = useSelector((store) => store.productReducer.products)
    
    const getName = () => {
        return product.filter(x => x.id === id)[0]?.name
    }

    const pathnames = location.pathname.split("/").filter(x => x)

    return (
        <div className='breadcrumb'>
            <nav>
                {
                    pathnames.length > 0 && <Link to='/' className='breadcrumb-tab'>Home</Link>
                }
                {
                    pathnames.map(( e, index ) => {
                        let to = `/${pathnames.slice(0, index + 1).join('/')}`
                        return <Link key={index} className='breadcrumb-tab' to={to}>{ e === id ? getName() : e }</Link>
                    })
                }
            </nav>
        </div>
    );
}

export default Breadcrumb;