import { Loader } from '@googlemaps/js-api-loader'
import { useEffect, useRef } from 'react'
import { MapProps } from '../types/weather'
import { purpleMode } from '../utils/mapThemes'

export function Map ({ locationInfo }: MapProps): JSX.Element {
  const { latitude, longitude } = locationInfo
  const mapRef = useRef()

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
        styles: purpleMode,
        disableDefaultUI: true
      }

      const mapElement = document.getElementById('map')
      if (mapElement != null) {
        mapRef.current = new google.maps.Map(mapElement, mapOptions)
      }
    }).catch((error) => {
      console.error('Error loading Google Maps:', error)
    })
  }, [])

  useEffect(() => {
    if (mapRef.current !== undefined) {
      (mapRef.current as google.maps.Map).setCenter({ lat: latitude, lng: longitude })
    }
  }, [latitude, longitude])

  return <div id='map' style={{ height: '100%', width: '100%' }} />
}
