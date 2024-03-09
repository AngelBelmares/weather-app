export function getLocationName (latitude: number, longitude: number): string {
  const API_KEY = import.meta.env.VITE_MAPS_API_KEY
  const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}
  &result_type=locality&language=es&location_type=APPROXIMATE&key=${API_KEY}`
  fetch(API_URL)
    .then(async (response) => await response.json())
    .then((data) => {
      const locationName = data.results[0].formatted_address
      return locationName
    })
    .catch((error) => {
      console.error('Error fetching location:', error)
    })
  return 'Monterrey'
}
