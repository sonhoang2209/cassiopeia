import React from 'react';
import ButtonArrow from '../../common/Button';

function BannerItem(props) {
    return (
        <div className='banner-item-inner'>
            <div className='banner-background'>
                <img alt={props.data.title} src={props.data.thumbnail} />
            </div>
            <h2 className='banner-item-title'>{props.data.title}</h2>
            <p className='banner-item-content'>{props.data.content}</p>
            <div className='banner-button'>
                {
                    props.btnBlack ? <ButtonArrow link={props.data.link} black text={props.data.text} /> : <ButtonArrow link={props.data.link} text={props.data.text} />
                }
            </div>
        </div>
    );
}

export default BannerItem;