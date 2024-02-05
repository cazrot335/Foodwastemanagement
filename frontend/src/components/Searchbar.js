import React, { useState } from 'react';

const SearchInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={onChange}
            style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '20px 0 0 20px', width: '100%' }}
        />
    );
};

const SearchButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '0 20px 20px 0', backgroundColor: 'gray', color: 'white' }}
        >
            Search
        </button>
    );
};

const Searchbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleButtonClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', border: '1px solid #ccc', width: '400px' }}>
                <SearchInput value={searchTerm} onChange={handleSearchChange} />
                <SearchButton onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export { Searchbar, SearchInput, SearchButton };
