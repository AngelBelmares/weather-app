import { useEffect, useState } from 'react'
import { WeatherData } from '../types/weather'
import { isArray } from 'chart.js/helpers'

export function useWeather (location: string): WeatherData[] {
  if (location === '') {
    location = 'monterrey'
  }

  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const VITE_API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${VITE_API_KEY}&contentType=json`

  useEffect(() => {
    async function fetchData (): Promise<void> {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        const weatherData = data.days
        if (isArray(weatherData)) {
          const mappedWeatherData = weatherData?.map((day: any) => ({
            day: day.datetime,
            conditions: day.conditions,
            imageSrc: day.icon,
            temperature: {
              max: day.tempmax,
              min: day.tempmin
            },
            description: day.description,
            hours: day.hours.map((hour: any) => ({
              datetime: hour.datetime,
              temp: hour.temp
            }))
          })) as WeatherData[]
          setWeatherData(mappedWeatherData)
        }
      } catch (error) {
        throw new Error('Error fetching data')
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()
  }, [location])
  return weatherData
}
