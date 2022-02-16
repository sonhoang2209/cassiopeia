import React, { useState } from 'react';
import './accordion.scss'

function Accordion(props) {
    const [click,setClick] = useState(false)

    const setOpen = () => setClick(!click);

    return (
            <div className='accordion-item' onClick={setOpen}>
                <div className='accordion-title'>
                    <span className='title'>
                        {props.data.title}
                    </span>
                    {
                        click ? <img src='https://cassiopeia.store/svgs/minus-dropdown.svg' alt='minus' /> : <img src='https://cassiopeia.store/svgs/plus-dropdown.svg' alt='plus' />
                    }
                </div>
                <div className={click ? 'accordion-content show' : 'accordion-content hiden'}>
                    {props.data.content}
                </div>
            </div>
        
    );
}

export default Accordion;