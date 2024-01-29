import './App.css'
import { Background } from './components/Background'
import { WeatherTimeLine } from './components/WeatherTimeLine'
import apiRespone from './utils/api_response_example.json'

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
      <Background theme='night' />
      <main className='flex flex-col items-center justify-between w-full h-96 p-3 md:w-3/4  bg-black'>
        <WeatherTimeLine
          weatherData={mappedWeatherData}
        />
        {/* {<WeatherForecast />} */}
      </main>
    </>
  )
}

export default App
