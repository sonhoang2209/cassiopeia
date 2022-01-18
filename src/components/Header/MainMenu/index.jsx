import React from 'react';
import Navigation from './Navigation';

function MainMenu(props) {
    return (
        <div className='main-menu'>
            <div className='container'>
                <div className='main-menu-inner'>
                    <Navigation />
                </div>
            </div>
        </div>
    );
}

export default MainMenu;