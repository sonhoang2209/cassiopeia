import React from 'react';

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
                                <a href={data.link} className='nav-link'>{data.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;