import React from 'react';
import AboutInner from '../components/About';
import Breadcrumb from '../components/Breadcrumb';
import PageName from '../components/common/PageName';

function About(props) {
    return (
        <div className='about-us'>
            <div className='container'>
                <Breadcrumb />
                <PageName title="About us" />
                <AboutInner />
            </div>
        </div>
    );
}

export default About;