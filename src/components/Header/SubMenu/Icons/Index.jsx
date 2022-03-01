import React from 'react';
import PreviewCart from './PreviewCart';
import Search from './Search';
import Account from './Account';

function HeadIcons(props) {
    return (
        <div className='link-icons'>
            <Search />
            <PreviewCart />
            <Account />
        </div>
    );
}

export default HeadIcons;