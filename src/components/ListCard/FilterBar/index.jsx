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
        "value":"high-to-low"
    }
    
]

const sortPrice = [
    {
        "title":"Under $10",
        "value":"under 10"
    },
    {
        "title":"$10 - $50",
        "value":"10-50"
    },
    {
        "title":"$50 - $100",
        "value":"50-100"
    },
    {
        "title":"Over $100",
        "value":"over 100"
    }
]

const sortType = [
    {
        "title":"Lilies",
        "value":"lilies"
    },
    {
        "title":"Gerberas",
        "value":"gerberas"
    },
    {
        "title":"Roses",
        "value":"roses"
    },
    {
        "title":"Chrysanthemums",
        "value":"chrysanthemums"
    }
]

function FilterBar(props) {
    return (
        <div className='filter-bar'>
            <div className='dropdown-list'>
                <Dropdown title='Sort by' options={sort} />
                <Dropdown title='Price'  options={sortPrice} />
                <Dropdown title='Type' options={sortType} />
                {/* <Dropdown title='Occasion' /> */}
            </div>
            <span className='filter-bar-total'>{props.items} items</span>
        </div>
    );
}

export default FilterBar;