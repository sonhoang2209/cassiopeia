import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Search(props) {
    const [isOpen , setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [searchData, setSearchData] = useState([])

    const navigate = useNavigate();

    const products = useSelector((store) => store.productReducer.products)

    const SearchClick = (data) => () => {
        navigate(`/${data.category}s/${data.id}`)
        setSearchText("")
    }

    useEffect(()=> {
        setSearchData(products.filter(e => e.name.toLowerCase().indexOf(searchText) > -1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchText])

    return (
        <div style={{display:"inline-block"}} className="search">
            <div style={{display:"flex"}}>
                <input 
                    placeholder='Search' 
                    className={isOpen ? 'input-search show' : 'input-search hiden'} 
                    onChange={(e) => setSearchText(e.target.value)}
                    defaultValue={searchText}
                />
                <span className='sub-menu-btn' onClick={() => setIsOpen(!isOpen)}>
                    <span style={{margin:"0 0 0 10px"}} className='icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2297 18.4595C5.68458 18.4595 2 14.7749 2 10.2297C2 5.68458 5.68458 2 10.2297 2C14.7749 2 18.4595 5.68458 18.4595 10.2297C18.4595 12.1957 17.7701 14.0006 16.62 15.416L22.7506 21.5467C23.0831 21.8791 23.0831 22.4182 22.7506 22.7506C22.4182 23.0831 21.8791 23.0831 21.5467 22.7506L15.416 16.62C14.0006 17.7701 12.1957 18.4595 10.2297 18.4595ZM10.2297 16.7568C13.8345 16.7568 16.7568 13.8345 16.7568 10.2297C16.7568 6.62495 13.8345 3.7027 10.2297 3.7027C6.62495 3.7027 3.7027 6.62495 3.7027 10.2297C3.7027 13.8345 6.62495 16.7568 10.2297 16.7568Z" fill="black"/>
                        </svg>
                    </span>
                </span>
            </div>
            <div className={searchText.length > 0 ? "search-modal show" : "search-modal hiden" }>
                {
                    searchData.length > 0 ? searchData.map((e, index) => {
                        return <div onClick={SearchClick(e)} key={index}>
                            <div className='search-item'>
                                <div className='thumbnail'>
                                    <img alt={e.name} src={e.thumbnail}/>
                                </div>
                                <div className='content'>
                                    <span className='name'>{e?.name}</span>
                                    <span>${e.price * ( 1 - e.offer / 100 )}</span>
                                </div>
                            </div>
                        </div>
                    })
                    : <div className='no-product'>There are no products with the keyword "{searchText}".</div>
                }
            </div>
        </div>
    );
}

export default Search;