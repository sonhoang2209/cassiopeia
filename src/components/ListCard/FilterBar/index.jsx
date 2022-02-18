import React from 'react';
import Dropdown from './Dropdown';
import {sort, sortType, sortPrice, sortOccasion} from "./options"

function FilterBar(props) {
    return (
        <div className='filter-bar'>
            <div className='dropdown-list'>
                <Dropdown title='Sort by' options={sort} />
                <Dropdown title='Price'  options={sortPrice} />
                <Dropdown title='Type' options={sortType} />
                <Dropdown title='Occasion' options={sortOccasion} />
            </div>
            <span className='filter-bar-total'>{props.items} items</span>
        </div>
    );
}

export default FilterBar;