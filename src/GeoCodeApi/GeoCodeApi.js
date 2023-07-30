const axios = require('axios');

const apiKey = 'AIzaSyBPc0iOZgFd0fqFYMJPJwFzRsPxcKrWS6E';
const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

async function geocodeAddress(address) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        address: address,
        key: apiKey,
      },
    });

    // Handle the response data here
    const results = response.data.results;
    if (results.length > 0) {
      const location = results[0].geometry.location;
      console.log('Latitude:', location.lat);
      console.log('Longitude:', location.lng);
      return location;
    } else {
      console.log('No results found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from Geocoding API:', error);
    return null;
  }
}

// Example usage
const address = '1600 Amphitheatre Parkway, Mountain View, CA';
geocodeAddress(address);