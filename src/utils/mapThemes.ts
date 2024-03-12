import { Themes } from '../types/weather'

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

const skyeBlueMode = [
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#878787'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f9f5ed'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        color: '#f5f5f5'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9c9c9'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#aee0f4'
      }
    ]
  }
]

const eveningMode = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eec8df'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        gamma: 0.01
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        saturation: -31
      },
      {
        lightness: -33
      },
      {
        weight: 2
      },
      {
        gamma: 0.8
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        saturation: '-98'
      },
      {
        lightness: '87'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        lightness: '-84'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        lightness: '100'
      },
      {
        saturation: '-1'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        saturation: '66'
      },
      {
        lightness: '0'
      },
      {
        weight: '2.60'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 30
      },
      {
        saturation: 30
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        saturation: 20
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 20
      },
      {
        saturation: -20
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: '68'
      },
      {
        saturation: '-14'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        saturation: 25
      },
      {
        lightness: 25
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [
      {
        saturation: '-100'
      },
      {
        lightness: '-32'
      },
      {
        gamma: '1.21'
      },
      {
        weight: '0.01'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        lightness: -20
      }
    ]
  }
]
export const setMapTheme = (theme: Themes | undefined): any => {
  if (theme === 'night') {
    return purpleMode
  } else if (theme === 'morning') {
    return skyeBlueMode
  } else if (theme === 'noon') {
    return skyeBlueMode
  } else if (theme === 'evening') {
    return eveningMode
  }
  return purpleMode
}
