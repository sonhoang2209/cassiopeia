import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    
    let navigate = useNavigate();

    return (
        <nav className='navbar header-navbar'>
            <ul>
                {
                    navbarData.map((data, index)=> {
                        return(
                            <li key={index} className='nav-item'>
                                <span onClick={() => navigate(data.link) } className='nav-link'>{data.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;