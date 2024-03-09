import { useEffect, useState } from 'react'
import { getLocationName } from '../utils/location'
import { LocationInfo } from '../types/weather'

interface UseLocationProps {
  locationName?: string
}

export function useLocation ({ locationName }: UseLocationProps): LocationInfo {
  const [location, setLocation] = useState<LocationInfo>({
    name: '',
    latitude: 0,
    longitude: 0,
    tzoffset: 0,
    sunriseEpoch: 0,
    sunsetEpoch: 0
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationName = getLocationName(latitude, longitude)
      setLocation({ ...location, latitude, longitude, name: locationName })
    })
  }, [])

  if (locationName !== '' && locationName !== location.name && locationName !== undefined) {
    setLocation({ ...location, name: locationName })
  }

  return location
}
