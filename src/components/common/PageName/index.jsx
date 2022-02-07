import React from 'react';

function PageName(props) {
    return (
        <div className='page-name' style={{fontSize:32}}>
            {props.name}
        </div>
    );
}

export default PageName;