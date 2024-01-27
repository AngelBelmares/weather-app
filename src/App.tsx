import './App.css'
import apiRespone from './utils/api_response_example.json'
import { WeatherTimeLine } from './components/WeatherTimeLine'
import { Background } from './components/Background'

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
  return (
    <>
      <Background theme='morning' />
      <WeatherTimeLine
        weatherData={mappedWeatherData}
      />
    </>
  )
}

export default App
