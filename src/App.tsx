import { useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import apiRespone from './utils/api_response_example.json'
import { TemperatureChart } from './components/TemperatureChart'

const weatherData = apiRespone.days

const mappedWeatherData = weatherData?.map(day => ({
  day: day.datetime,
  conditions: day.conditions,
  imageSrc: day.icon,
  temperature: {
    current: day.temp,
    max: day.tempmax,
    min: day.tempmin
  },
  description: day.description
}))

function App (): JSX.Element {
  const [selectedDay, setSelectedDay] = useState(apiRespone.days[0])

  return (
    <>
      <Background theme='night' />
      <main className='flex flex-col items-center justify-between w-full h-1/2 p-3 md:w-3/4 gap-8'>
        <ForecastCards
          weatherData={mappedWeatherData}
          setSelectedDay={setSelectedDay}
        />
        <TemperatureChart day={selectedDay} />
      </main>
    </>
  )
}

export default App
