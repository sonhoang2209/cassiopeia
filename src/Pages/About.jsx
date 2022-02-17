import React from 'react';
import AboutInner from '../components/About';
import PageName from '../components/common/PageName';

function About(props) {
    return (
        <div className='about-us'>
            <div className='container'>
                <PageName title="About us" />
                <AboutInner />
            </div>
        </div>
    );
}

export default About;