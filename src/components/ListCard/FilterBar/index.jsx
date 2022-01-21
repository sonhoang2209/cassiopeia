import React from 'react';
import Dropdown from './Dropdown';

function FilterBar(props) {
    return (
        <div className='filter-bar'>
            <div className='dropdown-list'>
                <Dropdown title='Sort by' />
                <Dropdown title='Price' />
                <Dropdown title='Type' />
                <Dropdown title='Occasion' />
            </div>
            <span className='filter-bar-total'>{props.items} items</span>
        </div>
    );
}

export default FilterBar;