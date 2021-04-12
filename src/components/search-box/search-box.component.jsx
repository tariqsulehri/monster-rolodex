import React from 'react';
import './search-box.styles.css';

export const InputBox = ({ placeHolder, handleChange }) => (

    <input className='search-box'
        type="search"
        placeholder={placeHolder}
        name='searchString'
        onChange={handleChange}
    />

);