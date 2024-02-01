import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import apiRespone from './utils/api_response_example.json'
import { TemperatureChart } from './components/TemperatureChart'
import { WeatherData } from './types/weather'

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
  description: day.description,
  hours: day.hours.map((hour: any) => ({
    datetime: hour.datetime,
    temp: hour.temp
  }))
}))

function App (): JSX.Element {
  const [selectedDay, setSelectedDay] = useState(apiRespone.days[0])
  const [weatherData, setWeatherData] = useState<any>(apiRespone.days)

  const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/monterrey?unitGroup=us&include=days%2Chours%2Ccurrent&key=YOUR_API_KEY&contentType=json'

  useEffect(() => {
    async function fetchData (): Promise<WeatherData[]> {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data?.days
      } catch (error) {
        throw new Error('Error fetching data')
      }
    }

    const weatherData = fetchData()
    const mappedWeatherData = weatherData?.map(day => ({
      day: day.datetime,
      conditions: day.conditions,
      imageSrc: day.icon,
      temperature: {
        current: day.temp,
        max: day.tempmax,
        min: day.tempmin
      },
      description: day.description,
      hours: day.hours.map((hour: any) => ({
        datetime: hour.datetime,
        temp: hour.temp
      }))
    }))
    setWeatherData(mappedWeatherData)
  }, [])

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
