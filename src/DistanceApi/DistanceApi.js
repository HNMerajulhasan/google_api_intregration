const axios = require('axios');

const apiKey = 'AIzaSyBPc0iOZgFd0fqFYMJPJwFzRsPxcKrWS6E';
const baseUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';

async function calculateDistance(origin, destination) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        origins: origin,
        destinations: destination,
        key: apiKey,
      },
    });

    // Handle the response data here
    const distanceText = response.data.rows[0].elements[0].distance.text;
    const distanceValue = response.data.rows[0].elements[0].distance.value;
    console.log('Distance:', distanceText);
    console.log('Distance Value (in meters):', distanceValue);
    return distanceValue;
  } catch (error) {
    console.error('Error fetching data from Distance Matrix API:', error);
    return null;
  }
}

// Example usage
const origin = 'New York, NY';
const destination = 'Los Angeles, CA';
calculateDistance(origin, destination);