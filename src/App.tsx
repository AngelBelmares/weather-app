import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import { TemperatureChart } from './components/TemperatureChart'
import { useWeather } from './hooks/useWeather'
import { LocationForm } from './components/LocationForm'
import { LocationInfo, WeatherData } from './types/weather'
import { MainCard } from './components/MainCard'
import { Map } from './components/Map'

function App (): JSX.Element {
  const [location, setLocation] = useState<LocationInfo>({
    name: 'Monterry',
    latitude: 25.6866,
    longitude: -100.3161,
    sunrise: 0,
    sunset: 0
  })
  const { weatherData, currentConditions, locationInfo } = useWeather(location.name)
  const [selectedDay, setSelectedDay] = useState<WeatherData>(weatherData[0])

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
      <Background theme='night' />
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
