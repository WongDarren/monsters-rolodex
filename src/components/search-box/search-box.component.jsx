import React from 'react';

import './search-box.styles.css';

// passing in placeholder and handleChange
export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className = 'search'
    type = 'search' 
    placeholder = {placeholder}
    onChange = {handleChange}
  />
)