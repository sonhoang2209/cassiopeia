import React,{useState} from 'react';
import FilterBar from './FilterBar';
import Card from '../common/Card';
import { ButtonDefault } from '../common/Button';

import './list-card.scss'

function ListCard(props) {
    const [x,setX] = useState(4)
    const data = props.data.filter((data,index) => index < x)
    return (
        <div className='list-card'>
            <FilterBar items={props.data.length} />
            <div className='list-card-inner'>
                {
                    data.map((item,index) => {
                        return (
                            <div className='item' key={index}>
                                <Card data={item} />
                            </div>
                        )
                    })
                }
                
            </div>
            {
                x < props.data.length && (
                    <div onClick={() => setX(x + 4)}>
                        <ButtonDefault black text='See more'/>
                    </div>
                )
            }
        </div>
    );
}

export default ListCard;