import { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        window.location.href = `/search/results/?query=${query}`;
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <button className="search-button" onClick={handleSearch} placeholder='Bonus Feature'><i className="fa">&#xf002;</i></button> 
            {/* Add A placeholder */}

        </div>
    );
}

export default SearchBar


