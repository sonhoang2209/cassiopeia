import React from 'react';
import { Route, Routes, useRouteMatch } from "react-router-dom";
import Home from '../Pages/Home';
import Flowers from '../Pages/Flowers';


function FlowersNavigation(props) {
    const match = useRouteMatch();
    return (
        <>
            <Routes>
                <Route path={match.url} exact component={Flowers} />
                <Route path={`${match.url}/:productId`} component={Home} />
            </Routes>
            
        </>
    );
}

export default FlowersNavigation;