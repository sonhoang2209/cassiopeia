import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import './breadcrumb.scss'

function Breadcrumb(props) {
    let location = useLocation();

    const product = useSelector((store) => store.productReducer.products)
    
    const getName = (e) => {
        const data = product.filter(x => x.id === e)
        if (data.length > 0) {
            return data[0]?.name
        } else {
            return e
        }
    }

    const pathNames = location.pathname.split("/").filter(x => x)

    return (
        <div className='breadcrumb'>
            <nav>
                {
                    pathNames.length > 0 && <Link to='/' className='breadcrumb-tab'>Home</Link>
                }
                {
                    pathNames.map(( e, index ) => {
                        let to = `/${pathNames.slice(0, index + 1).join('/')}`
                        return <Link key={index} className='breadcrumb-tab' to={to}>{getName(e)}</Link>
                    })
                }
            </nav>
        </div>
    );
}

export default Breadcrumb;