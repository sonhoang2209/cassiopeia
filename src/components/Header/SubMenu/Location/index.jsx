import React from 'react';

function Location(props) {
    return (
        <div className='location'>
            <span className='icon'>
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12.2094C6.98528 12.2094 9 9.47622 9 6.10469C9 2.73316 6.98528 0 4.5 0C2.01472 0 0 2.73316 0 6.10469C0 9.47622 2.01472 12.2094 4.5 12.2094ZM4.5 6.54545C5.62967 6.54545 6.54545 5.62967 6.54545 4.5C6.54545 3.37033 5.62967 2.45455 4.5 2.45455C3.37033 2.45455 2.45455 3.37033 2.45455 4.5C2.45455 5.62967 3.37033 6.54545 4.5 6.54545Z" fill="black"/>
                </svg>
            </span>
            <span className='text'>City</span>
        </div>
    );
}

export default Location;