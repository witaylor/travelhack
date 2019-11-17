import React from 'react';

const SearchBar = (props) => {
    let handleChange = (event) => {
        props.callback(event.target.value);
    };

    return (
        <div className={'search-bar'}>
            <input
                type={'text'}
                placeholder={props.placeholder || 'Aa'}
                onChange={ handleChange }
            />
        </div>
    );
};

export default SearchBar;
