import { useEffect, useState } from 'react'
import { WeatherData, CurrentConditions, LocationInfo } from '../types/weather'
import { isArray } from 'chart.js/helpers'

export function useWeather (location: string): { weatherData: WeatherData[], currentConditions: CurrentConditions, locationInfo: LocationInfo } {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>({
    conditions: '',
    dateTimeEpoch: 0,
    icon: '',
    temperature: 0,
    precip: 0
  })
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    location: '',
    latitude: 0,
    longeitude: 0,
    sunrise: 0,
    sunset: 0
  })

  if (location === '') {
    location = 'monterrey'
  }

  const VITE_API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${VITE_API_KEY}&contentType=json`
  console.log(API_URL)

  useEffect(() => {
    async function fetchData (): Promise<void> {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        const currentConditions = data.currentConditions
        const mappedCurrentConditions: CurrentConditions = {
          conditions: currentConditions.conditions,
          dateTimeEpoch: currentConditions.datetimeEpoch,
          icon: currentConditions.icon,
          temperature: currentConditions.temp,
          precip: currentConditions.precip
        }
        setCurrentConditions(mappedCurrentConditions)
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
        const locationInfo: LocationInfo = {
          location: data.resolvedAddress,
          latitude: data.latitude,
          longeitude: data.longitude,
          sunrise: data.days[0].sunrise,
          sunset: data.days[0].sunset
        }
        setLocationInfo(locationInfo)
      } catch (error) {
        throw new Error('Error fetching data')
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()
  }, [location])
  return { weatherData, currentConditions, locationInfo }
}
