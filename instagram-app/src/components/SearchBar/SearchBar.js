import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faCompass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
const compassIcon = <FontAwesomeIcon icon={faCompass} />
const heartIcon = <FontAwesomeIcon icon={faHeart} />
const userIcon = <FontAwesomeIcon icon={faUser} />

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="header-section">
                <div className="home-icons">
                    <h4 className="instagram-icon icon">{instagramIcon}</h4>
                    <h4 className="home-icon-break icon"> |</h4>
                    <h1 className="instagram-logo icon">Instagram</h1>
                </div>
            </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchbar"
                />
            <div className="user-icons">
                <div className="compass-icon icon">
                    {compassIcon}
                </div>
                <div className="heart-icon icon">
                    {heartIcon}
                </div>
                <div className="user-icon icon">
                    {userIcon}
                </div>
            </div>         
        </div>
    );
}
export default SearchBar;