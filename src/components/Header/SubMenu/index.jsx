import React from 'react';
import Location from './Location';
import HeadIcons from './Icons/Index';
import { useNavigate } from 'react-router-dom';

function SubMenu(props) {
    const navigate =useNavigate();
    return (
        <div className='sub-menu'>
            <div className='container'>
                <div className='sub-menu-inner'>
                    <Location />
                    <div className='logo'>
                        <span onClick={()=> navigate('/')}>
                            <span>CASSIOPEIA</span>
                        </span>
                    </div>
                    <HeadIcons />
                </div>
            </div>
        </div>
    );
}

export default SubMenu;