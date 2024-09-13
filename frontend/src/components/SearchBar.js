import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResultSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`/api/search?query=${query}`);
    setResults(response.data);
  };

  const handleResultClick = (result) => {
    onResultSelect(result);
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <span
              onClick={() => handleResultClick(result)}
              style={{ cursor: 'pointer' }}
            >
              {result.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
