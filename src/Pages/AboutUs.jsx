import React from 'react';
import AboutInner from '../components/About';
import PageName from '../components/common/PageName';

function AboutUs(props) {
    return (
        <div className='about-us'>
            <PageName name='About us'  />
           <AboutInner />
        </div>
    );
}

export default AboutUs;