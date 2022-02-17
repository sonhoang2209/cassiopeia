import React from 'react';
import { Outlet } from "react-router-dom";


function FlowersNavigation(props) {
    return (
        <div className='flower-navigation'>
            <Outlet />
        </div>
    );
}

export default FlowersNavigation;