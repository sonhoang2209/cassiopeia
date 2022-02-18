import React from 'react';
import PreviewCart from './PreviewCart';
import Search from './Search';

function HeadIcons(props) {
    
    return (
        <div className='link-icons'>
            <Search />
            
            <PreviewCart />
        </div>
    );
}

export default HeadIcons;