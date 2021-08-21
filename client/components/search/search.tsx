import React from 'react';

const Search = () => {
    return (
        <div className={'search'}>
            <input className={'search__input'} type="text"/>
            <ul className={'search__dropdown'}>
                <li className={'search__dropdown-item'}>
                    <img src="" alt="" className="search__dropdown-image"/>
                    <div className="search__dropdown-title">Night streets in Hog Kong</div>
                    <div className="search__dropdown-time">24:15:05</div>
                    <div className="search__dropdown-author">Janush Kowalski</div>
                </li>
                <li className={'search__dropdown-item'}>
                    <img src="" alt="" className="search__dropdown-image"/>
                    <div className="search__dropdown-title">Night streets in Hog Kong</div>
                    <div className="search__dropdown-time">24:15:05</div>
                    <div className="search__dropdown-author">Janush Kowalski</div>
                </li>
                <li className={'search__dropdown-item'}>
                    <img src="" alt="" className="search__dropdown-image"/>
                    <div className="search__dropdown-title">Night streets in Hog Kong</div>
                    <div className="search__dropdown-time">24:15:05</div>
                    <div className="search__dropdown-author">Janush Kowalski</div>
                </li>
            </ul>
        </div>
    );
};

export default Search;