import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './breadcrumb.scss'

function Breadcrumb(props) {
    const navigate = useNavigate();
    let location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x)

    const clickBreadcrumb = (data) => () => {
        navigate(data)
    }

    return (
        <div className='breadcrumb'>
            <nav>
                <span onClick={clickBreadcrumb('/')} className='breadcrumb-tab'>Home</span>
                {
                    pathnames.map(( e, index ) => {
                        let to = `/${pathnames.slice(0, index + 1).join('/')}`
                        return <Link key={index} className='breadcrumb-tab' to={to}>{e}</Link>
                    })
                }
            </nav>
        </div>
    );
}

export default Breadcrumb;