import React from 'react';
import { Link } from 'react-router-dom';

const navbarData = [
    {
        'title':'Flowers',
        'link':'/flowers'
    },
    {
        'title':'Plants',
        'link':'/plants'
    },
    {
        'title':'Gifts',
        'link':'/gifts'
    },
    {
        'title':'Discounts',
        'link':'/discounts'
    },
    {
        'title':'About us',
        'link':'/about-us'
    },
]

function Navigation(props) {
    return (
        <nav className='navbar header-navbar'>
            <ul>
                {
                    navbarData.map((data, index)=> {
                        return(
                            <li key={index} className='nav-item'>
                                <Link to={data.link}>
                                    <span className='nav-link'>{data.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;