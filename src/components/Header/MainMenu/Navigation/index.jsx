import React from 'react';

const navbarData = [
    {
        'title':'Flowers',
        'link':'#'
    },
    {
        'title':'Plants',
        'link':'#'
    },
    {
        'title':'Gifts',
        'link':'#'
    },
    {
        'title':'Discounts',
        'link':'#'
    },
    {
        'title':'About us',
        'link':'#'
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