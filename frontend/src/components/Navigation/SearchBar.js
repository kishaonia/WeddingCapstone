import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Disable search functionality and display "Feature coming soon"
    alert('Feature coming soon');
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
      <button className="search-button" onClick={handleSearch} disabled>
        <i className="fa">&#xf002;</i>
      </button>
    </div>
  );
}

export default SearchBar;
