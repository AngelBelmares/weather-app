import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import { TemperatureChart } from './components/TemperatureChart'
import { useWeather } from './hooks/useWeather'

function App (): JSX.Element {
  const [location, setLocation] = useState('monterrey')
  const weatherData = useWeather(location)
  const [selectedDay, setSelectedDay] = useState(weatherData[0])

  useEffect(() => {
    setSelectedDay(weatherData[0])
  }, [weatherData])

  return (
    <>
      <Background theme='night' />
      <main className='flex flex-col items-center justify-between w-full h-1/2 p-3 md:w-3/4 gap-8'>
        <ForecastCards
          weatherData={weatherData}
          setSelectedDay={setSelectedDay}
        />
        <TemperatureChart day={selectedDay} />
      </main>
    </>
  )
}

export default App
