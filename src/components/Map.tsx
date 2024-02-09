import { Loader } from '@googlemaps/js-api-loader'
import { useEffect } from 'react'
import { MapProps } from '../types/weather'

const darkMode = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 13
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#144b53'
      },
      {
        lightness: 14
      },
      {
        weight: 1.4
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#08304b'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0c4152'
      },
      {
        lightness: 5
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#0b434f'
      },
      {
        lightness: 25
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#0b3d51'
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        color: '#146474'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#021019'
      }
    ]
  }
]

const purpleMode = [
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        hue: '#6600ff'
      },
      {
        saturation: -11
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        saturation: -78
      },
      {
        hue: '#6600ff'
      },
      {
        lightness: -47
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        hue: '#5e00ff'
      },
      {
        saturation: -79
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        lightness: 30
      },
      {
        weight: 1.3
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        hue: '#5e00ff'
      },
      {
        saturation: -16
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'all',
    stylers: [
      {
        saturation: -72
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        saturation: -65
      },
      {
        hue: '#1900ff'
      },
      {
        lightness: 8
      }
    ]
  }
]

export function Map ({ locationInfo }: MapProps): JSX.Element {
  const { latitude, longitude } = locationInfo
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new google.maps.Map(mapElement, mapOptions)
      }
    }).catch((error) => {
      console.error('Error loading Google Maps:', error)
    })
  }, [])

  return <div id='map' style={{ height: '100%', width: '100%' }} />
}
