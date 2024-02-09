import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import { TemperatureChart } from './components/TemperatureChart'
import { useWeather } from './hooks/useWeather'
import { LocationForm } from './components/LocationForm'
import { WeatherData } from './types/weather'
import { MainCard } from './components/MainCard'

function App (): JSX.Element {
  const [location, setLocation] = useState('monterrey')
  const { weatherData, currentConditions, locationInfo } = useWeather(location)
  const [selectedDay, setSelectedDay] = useState<WeatherData>(weatherData[0])

  useEffect(() => {
    setSelectedDay(weatherData[0])
  }, [weatherData])

  const handleLocationChange = (newLocation: string): void => {
    setLocation(newLocation)
  }

  return (
    <>
      <Background theme='night' />
      <main className='flex flex-col items-center justify-between w-full md:w-4/5 lg:w-1/2'>
        <h1 className='font-bold text-2xl'>{locationInfo.location}</h1>
        <div className='flex'>
          <MainCard currentConditions={currentConditions} />
          <aside>
            <LocationForm onLocationChange={handleLocationChange} />
            {/* { Map } */}
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
