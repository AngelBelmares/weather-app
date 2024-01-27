import { WeatherTimeLineProps } from '../types/weather'
import { WeatherCard } from './WeatherCard'

export function WeatherTimeLine ({ weatherData = [] }: WeatherTimeLineProps): JSX.Element {
  if (!Array.isArray(weatherData)) {
    console.log(weatherData)
    return <div>Error: weatherData is not an array</div>
  }

  return (
    <section className='flex justify-center items-center h-48 w-3/4 gap-2 my-6'>
      {weatherData.map((data, index) => {
        const { day, imageSrc, temperature, conditions } = data
        return (
          <WeatherCard
            key={index}
            day={day}
            imageSrc={imageSrc}
            temperature={temperature}
            conditions={conditions}
          />
        )
      })}
    </section>
  )
}
