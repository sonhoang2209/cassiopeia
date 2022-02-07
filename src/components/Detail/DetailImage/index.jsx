import React from 'react';

function DetailImage(props) {
    return (
        <div className='detail-image__inner'>
            <div type={props.data.type} className={props.data.category === 'flower' ? 'image image-pd' : 'image' }>
                <img alt={props.data.name} src={props.data.thumbnail} />
            </div>
            <div className='label-bar'>
                <div className="label">
                    <img src="https://cassiopeia.store/svgs/free-i.svg" alt="label" />
                    <span>Benefits <br/> description</span>
                </div>
                <div className="label">
                    <img src="https://cassiopeia.store/svgs/star-i.svg" alt="label" />
                    <span>Always fresh <br/> flowers</span>
                </div>
                <div className="label">
                    <img src="https://cassiopeia.store/svgs/camera-i.svg" alt="label" />
                    <span>Take photo<br/> of bouquet</span>
                </div>
            </div>
        </div>
    );
}

export default DetailImage;