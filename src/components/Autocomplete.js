import React, { useState, useEffect } from 'react';

const Autocomplete = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
