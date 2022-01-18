import React from 'react';
import SubMenu from './SubMenu';
import MainMenu from './MainMenu';
import './style.scss'

function Header(props) {
    return (
        <div className='header'>
            <SubMenu />
            <MainMenu />
        </div>
    );
}

export default Header;