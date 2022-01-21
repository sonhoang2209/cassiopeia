import React, { useState } from 'react';
import Card from '../common/Card';
import ButtonArrow from '../common/Button';

import './slideCard.scss'

function SlideCard(props) {
    let translate = 30000 / 1160
    let items = props.catalog ? 4 : 5
    const [x,setX] = useState(0)
    const data = props.data.filter((data,index) => index < 5)
    const slideLeft = () =>{
        x < -7.105427357601002e-15 && setX(x + translate)
    }

    const slideRight = () =>{
        x > -translate * (data.length - items + 1) && setX(x-translate)
    }

    function CatalogCard() {
        return (
            <div className='item item-link-catalog'>
                <div className='card'>
                    <h3>Catalog</h3>
                    <ButtonArrow link={props.catalog} text='See more' />
                </div>
            </div>
        )
    }

    return (
        <div className='slide-card'>
            <div className='container'>
                <div className='slide-card-inner'>
                    <div className='slide-title'>
                        <span>{props.title}</span>
                        <div className='slide-btns'>
                            <span onClick={slideLeft} >
                                <img src="https://cassiopeia.store/svgs/line-left-arrow-black.svg" alt="arrow"/>
                            </span>
                            <span onClick={slideRight}>
                                <img src="https://cassiopeia.store/svgs/line-right-arrow-black.svg" alt="arrow"/>
                            </span> 
                        </div>
                    </div>
                    <div className='slider'>
                        <div className='slide-inner' id='slider-inner' style={{transform:`translateX(${x}%)`}}>
                            {
                                data.map((item,index) => {
                                    return (
                                        <div className='item' key={index}>
                                            <Card data={item} />
                                        </div>
                                    )
                                })
                            }
                            {
                                props.catalog && <CatalogCard />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideCard;