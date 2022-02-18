import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilterKey } from '../../../../redux/productReducer';

function Dropdown(props) {
    const dispacth = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(null);

    const key =useSelector((store) => store.productReducer.filterKey)
    
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        // setSelectedOption(value);
        dispacth(getFilterKey(value))
        setIsOpen(false);
    };

    React.useEffect(() => {
        // console.log( 'selected : '+ selectedOption);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOpen])

    return (
        <div className='dropdown'>
            <div className='dropdown-inner'>
                <div className='dropdown-header' onBlur={() => setIsOpen(false)} onClick={toggling}>
                    {props.title}
                    <img className='dropdown-icon' alt='down' src='https://cassiopeia.store/svgs/dropdown-i.svg' />
                </div>
                {isOpen && (
                    <ul className='dropdown-list'>
                        {props.options.map(option => (
                            <li className={key === option.value ? 'list-item active' : 'list-item'} onClick={onOptionClicked(option.value)} key={Math.random()}>
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