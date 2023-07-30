import React, { useState } from 'react';
import axios from 'axios';

const PostcodeAutocomplete = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = 'AIzaSyBPc0iOZgFd0fqFYMJPJwFzRsPxcKrWS6E';
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
    try {
      const response = await axios.get(apiUrl, {
        params: {
          query,
          key: apiKey,
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for places"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {results.map((place) => (
           <li key={place.place_id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostcodeAutocomplete;


// `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBPc0iOZgFd0fqFYMJPJwFzRsPxcKrWS6E`