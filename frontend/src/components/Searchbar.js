import React, { useState } from 'react';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Perform search logic here
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', border: '1px solid #ccc', width: '400px' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '20px 0 0 20px', width: '100%' }}
                />
                <button
                    onClick={() => console.log('Search clicked')}
                    style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '0 20px 20px 0', backgroundColor: 'gray', color: 'white' }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
