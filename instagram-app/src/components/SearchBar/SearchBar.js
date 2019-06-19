import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className='search-bar'>
      <div className='header-section'>
        <div className='home-icons'>
          <h4 className='instagram-icon icon'>
            <i class='fab fa-instagram fa-3x' />
          </h4>
          <h4 className='home-icon-break icon'> |</h4>
          <h1 className='instagram-logo icon'>Instagram</h1>
        </div>
      </div>
      <input
        type='text'
        placeholder='Search...'
        className='input-search'
        onChange={props.searchBar}
      />
      <div className='user-icons'>
        <div className='compass-icon icon'>
          <i class='far fa-compass fa-2x' />
        </div>
        <div className='heart-icon icon'>
          <i class='far fa-heart fa-2x' />
        </div>
        <div className='user-icon icon'>
          <i class='far fa-user fa-2x' />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
