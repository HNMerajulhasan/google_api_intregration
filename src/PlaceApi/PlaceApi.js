const axios = require('axios');

const apiKey = 'AIzaSyBPc0iOZgFd0fqFYMJPJwFzRsPxcKrWS6E';
const baseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

async function searchPlaces(query, radius, location) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        query: query,
        radius: radius,
        location: location,
        key: apiKey,
      },
    });

    // Handle the response data here
    const places = response.data.results;
    console.log(places);
    return places;
  } catch (error) {
    console.error('Error fetching data from Places API:', error);
    return [];
  }
}

// Example usage
const searchQuery = 'restaurants';
const searchRadius = 5000; // in meters
const searchLocation = 'latitude,longitude'; // Replace with actual latitude and longitude

searchPlaces(searchQuery, searchRadius, searchLocation);