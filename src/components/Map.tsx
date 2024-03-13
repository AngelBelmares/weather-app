import { Loader } from '@googlemaps/js-api-loader'
import { useEffect, useRef } from 'react'
import { setMapTheme } from '../utils/mapThemes'
import { Themes } from '../types/weather'

interface MapProps {
  locationInfo: {
    latitude: number
    longitude: number
  }
  theme?: Themes
}

export function GoogleMap ({ locationInfo, theme }: MapProps): JSX.Element {
  const { latitude, longitude } = locationInfo
  const mapRef = useRef<google.maps.Map | null>(null)
  const mapTheme = setMapTheme(theme)

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAPS_API_KEY,
      version: 'weekly'
    })

    loader.load().then(() => {
      const mapOptions = {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 10,
        styles: mapTheme,
        disableDefaultUI: true
      }

      const mapElement = document.getElementById('map')
      if (mapElement != null) {
        mapRef.current = new google.maps.Map(mapElement, mapOptions)
      }
    }).catch((error) => {
      console.error('Error loading Google Maps:', error)
    })
  }, [theme])

  useEffect(() => {
    if (mapRef.current !== undefined) {
      (mapRef.current as google.maps.Map).setCenter({ lat: latitude, lng: longitude })
    }
  }, [latitude, longitude])

  return <div id='map' style={{ height: '100%', width: '100%' }} />
}
