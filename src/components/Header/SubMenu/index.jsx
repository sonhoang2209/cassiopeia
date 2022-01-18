import React from 'react';
import Location from './Location';
import HeadIcons from './Icons/Index';

function SubMenu(props) {
    return (
        <div className='sub-menu'>
            <div className='container'>
                <div className='sub-menu-inner'>
                    <Location />
                    <div className='logo'>
                        <a href='/'>
                            <span>CASSIOPEIA</span>
                        </a>
                    </div>
                    <HeadIcons />
                </div>
            </div>
        </div>
    );
}

export default SubMenu;