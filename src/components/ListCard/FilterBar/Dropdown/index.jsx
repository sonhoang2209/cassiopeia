import React,{useState} from 'react';

const options = ["Mangoes", "Apples", "Oranges"];

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        // console.log( 'selected : '+ selectedOption);
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-inner'>
                <div className='dropdown-header' onClick={toggling}>
                    {props.title}
                    <img className='dropdown-icon' alt='down' src='https://cassiopeia.store/svgs/dropdown-i.svg' />
                </div>
                {isOpen && (
                    <ul className='dropdown-list'>
                        {options.map(option => (
                            <li className='list-item' onClick={onOptionClicked(option)} key={Math.random()}>
                            {option}
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
            
        </div>
    );
}

export default Dropdown;