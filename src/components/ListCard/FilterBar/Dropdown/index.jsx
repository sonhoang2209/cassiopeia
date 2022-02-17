import React,{useState} from 'react';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        
    };

    React.useEffect(() => {
        console.log( 'selected : '+ selectedOption);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOpen])

    return (
        <div className='dropdown'>
            <div className='dropdown-inner'>
                <div className='dropdown-header' onClick={toggling}>
                    {props.title}
                    <img className='dropdown-icon' alt='down' src='https://cassiopeia.store/svgs/dropdown-i.svg' />
                </div>
                {isOpen && (
                    <ul className='dropdown-list'>
                        {props.options.map(option => (
                            <li className='list-item' onClick={onOptionClicked(option.value)} key={Math.random()}>
                            {option.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
        </div>
    );
}

export default Dropdown;