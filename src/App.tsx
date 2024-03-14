import { useEffect, useState } from 'react'
import './App.css'
import { ForecastCards } from './components/ForecastCards'
import { TemperatureChart } from './components/TemperatureChart'
import { useWeather } from './hooks/useWeather'
import { LocationForm } from './components/LocationForm'
import { WeatherData, Themes } from './types/weather'
import { MainCard } from './components/MainCard'
import { GoogleMap } from './components/GoogleMap'
import { useTheme } from './hooks/useTheme'
import { useLocation } from './hooks/useLocation'
import { Background } from './components/Background'
import useWindowSize from './hooks/useWindowSize'

function App (): JSX.Element {
  const [locationName, setLocationName] = useState<string>('')
  const location = useLocation({ locationName })
  const { weatherData, currentConditions, locationInfo } = useWeather(location.name)
  const [selectedDay, setSelectedDay] = useState<WeatherData>(weatherData[0])

  const currentTheme: Themes = useTheme({
    sunrise: currentConditions.sunriseEpoch,
    sunset: currentConditions.sunsetEpoch,
    currentTime: currentConditions.dateTimeEpoch
  })

  useEffect(() => {
    setSelectedDay(weatherData[0])
  }, [weatherData])

  const handleLocationChange = (newLocation: string): void => {
    setLocationName(newLocation)
  }

  const windowSize = useWindowSize()

  return (
    <>
      <Background theme={currentTheme} />
      <main className='flex flex-col items-center justify-between w-full md:w-4/5 max-w-screen-xl mt-4 md:m-4 gap-4 md:gap-6 px-4 md:px-0 backdrop-blur-sm md:backdrop-blur-0'>
        <h1 className='font-bold text-2xl md:text-3xl text-white/90 text-center'>{locationInfo.name}</h1>
        <LocationForm onLocationChange={handleLocationChange} />
        <div className='flex flex-row w-full gap-2 md:gap-8 items-center justify-center'>
          <MainCard currentConditions={currentConditions} tzoffset={locationInfo.tzoffset} />
          {windowSize.width > 768 && <GoogleMap locationInfo={locationInfo} theme={currentTheme} />}
        </div>
      </main>
      <footer className='flex flex-col items-center justify-between w-full md:w-4/5 max-w-screen-xl p-0'>
        <ForecastCards
          weatherData={weatherData}
          setSelectedDay={setSelectedDay}
        />
        <TemperatureChart weatherData={selectedDay} />
      </footer>
    </>
  )
}

export default App
