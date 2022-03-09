import React from 'react';
import './about.scss'

function AboutInner(props) {
    return (
        <div className='about-us-inner flexbox'>
            <div className='block-left texts'>
                <p className='text'>The best way to brighten the special day of a friend or loved one is with flowers. But what happens when that special someone is far away? With Cassiopeia it is possible to surprise someone with a lovely bouquet no matter where he or she is in the world.</p>
                <p className='text'>With over 15 years of experience, we have covered many requests and are always receptive to all of your ideas, greeted with enthusiasm and our can-do attitude - if we aim to achieve something then we will!</p>
                <p className='text'>Over the course of the last 15 years we have grown steadily thanks to the trust placed in us by our customers. Today, We are a leading company in the world for sending flowers. We are also able to speedily ship fresh flowers to more than 20 countries around the world.</p>
            </div>
            <div className='block-right gallery about-us-gallery '>
                <div className='gallery-group1'>
                    <div className='gallery-image'>
                        <img alt='' src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg' />
                    </div>
                    <div className='gallery-group1-1'>
                        <div className='gallery-image'>
                            <img alt='' src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg' />
                        </div>
                        <div className='gallery-image'>
                            <img alt='' src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg' />
                        </div>
                    </div>
                </div>
                <div className=' gallery-group2'>
                    <div className='gallery-image'>
                        <img alt='' src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg' />
                    </div>
                    <div className='gallery-image'>
                        <img alt='' src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutInner;