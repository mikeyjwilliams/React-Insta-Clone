import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faCompass } from '@fortawesome/free-brands-svg-icons';
import './SearchBar.css';

const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
const compassSearch = <FontAwesomeIcon icon={faCompass} />


const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="header-section">
                <span className="instagram-icon">{instagramIcon}</span>
                <h1 className="instagram-name">Instagram</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchbar"
                />
                <div>
                    <span className="compass-search">
                        {compassSearch}
                    </span>
                </div>
            </div>         
        </div>
    );
}
export default SearchBar;