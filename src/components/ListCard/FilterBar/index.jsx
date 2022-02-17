import React from 'react';
import Dropdown from './Dropdown';

const sort = [
    {
        "title":"Newest",
        "value":"newest"
    },
    {
        "title":"Oldest",
        "value":"oldest"
    },
    {
        "title":"Low to high",
        "value":"low-to-high"
    },
    {
        "title":"High to low",
        "value":"ligh-to-low"
    }
    
]

function FilterBar(props) {
    return (
        <div className='filter-bar'>
            <div className='dropdown-list'>
                <Dropdown title='Sort by' options={sort} />
                {/* <Dropdown title='Price' />
                <Dropdown title='Type' />
                <Dropdown title='Occasion' /> */}
            </div>
            <span className='filter-bar-total'>{props.items} items</span>
        </div>
    );
}

export default FilterBar;