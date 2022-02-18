import React,{useState} from 'react';
import FilterBar from './FilterBar';
import Card from '../common/Card';
import { ButtonDefault } from '../common/Button';

import './list-card.scss'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ListCard(props) {
    const [x,setX] = useState(4)
    const [data, setData] = useState([...props.data])

    const [filterData, setFilterData] = useState([])

    const key = useSelector((store) => store.productReducer.filterKey)

    const NewPrice = data => {
        return data.price * (1 - data.offer / 100)
    }

    const SortType = ( data, key ) => {
        return data.filter(e => e.types.toLowerCase().indexOf(key) > -1)
    }

    const SortItems = (ref) => {
        const sortData = [...ref]
        switch(key) {
            case "newest": 
                return sortData
            case "oldest": 
                return sortData.reverse()
            case "low-to-high": 
                return sortData.sort((a ,b) => NewPrice(a) - NewPrice(b))
            case "high-to-low": 
                return sortData.sort((a ,b) => NewPrice(b) - NewPrice(a))
            case "under 10": 
                return sortData.filter(e => NewPrice(e) < 10)
            case "10-50": 
                return sortData.filter(e => NewPrice(e) > 10 && NewPrice(e) <= 50 )
            case "50-100": 
                return sortData.filter(e => NewPrice(e) > 50 && NewPrice(e) <= 100 )
            case "over 100": 
                return sortData.filter(e => NewPrice(e) > 100 )
            default:
                return SortType(sortData, key)
        }
    }

    useEffect(()=> {
        // console.log(key, data);
        setFilterData([...SortItems(data)])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.type, data, key])

    useEffect(() => {
        setData([...props.data])
    }, [props.data])

    return (
        <div className='list-card'>
            <FilterBar items={filterData.length} />
            <div className='list-card-inner'>
                {
                    filterData.length > 0 ? filterData.filter((data,index) => index < x).map((item,index) => {
                        return (
                            <div className='item' key={index}>
                                <Card data={item} />
                            </div>
                        )
                    }) : <div style={{textAlign:"center",width:"100%"}}><h3>No product found { key }</h3></div>
                }
                
            </div>
            {
                x < filterData.length && (
                    <div onClick={() => setX(x + 4)}>
                        <ButtonDefault black text='See more'/>
                    </div>
                )
            }
        </div>
    );
}

export default ListCard;