import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import { TemperatureChart } from './components/TemperatureChart'
import { useWeather } from './hooks/useWeather'
import { LocationForm } from './components/LocationForm'
import { LocationInfo, WeatherData, Themes } from './types/weather'
import { MainCard } from './components/MainCard'
import { Map } from './components/Map'
import { useTheme } from './hooks/useTheme'

function getLocationName (latitude: number, longitude: number): string {
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

function App (): JSX.Element {
  const [location, setLocation] = useState<LocationInfo>({
    name: 'Monterry',
    latitude: 25.6866,
    longitude: -100.3161,
    tzoffset: -6,
    sunriseEpoch: 0,
    sunsetEpoch: 0
  })

  const { weatherData, currentConditions, locationInfo } = useWeather(location.name)
  const [selectedDay, setSelectedDay] = useState<WeatherData>(weatherData[0])
  const currentTheme: Themes = useTheme({
    sunrise: (location.sunriseEpoch + (locationInfo.tzoffset * 3600)),
    sunset: (location.sunsetEpoch + (locationInfo.tzoffset * 3600)),
    currentTime: (currentConditions.dateTimeEpoch + (locationInfo.tzoffset * 3600))
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationName = getLocationName(latitude, longitude)
      setLocation({ ...location, latitude, longitude, name: locationName })
    })
  }, [])

  useEffect(() => {
    setSelectedDay(weatherData[0])
  }, [weatherData])

  useEffect(() => {
    setLocation(locationInfo)
  }, [locationInfo])

  const handleLocationChange = (newLocation: string): void => {
    setLocation({ ...location, name: newLocation })
  }

  return (
    <>
      <Background theme={currentTheme} />
      <main className='flex flex-col items-center justify-between w-full md:w-4/5 lg:w-1/2 m-4 gap-6 overflow-hidden'>
        <h1 className='font-bold text-3xl text-white'>{location.name}</h1>
        <div className='flex gap-8'>
          <MainCard currentConditions={currentConditions} />
          <aside className='flex flex-col gap-8 w-1/2'>
            <LocationForm onLocationChange={handleLocationChange} />
            <Map locationInfo={location} />
          </aside>
        </div>
      </main>
      <footer className='flex flex-col items-center justify-between w-full h-1/2 p-3 md:w-3/4 gap-8'>
        <ForecastCards
          weatherData={weatherData}
          setSelectedDay={setSelectedDay}
        />
        <TemperatureChart day={selectedDay} />
      </footer>
    </>
  )
}

export default App
