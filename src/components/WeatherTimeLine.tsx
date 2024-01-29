import { WeatherTimeLineProps } from '../types/weather'
import { WeatherCard } from './WeatherCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export function WeatherTimeLine ({ weatherData = [] }: WeatherTimeLineProps): JSX.Element {
  if (!Array.isArray(weatherData)) {
    console.log(weatherData)
    return <div>Error: weatherData is not an array</div>
  }

  const slideLeft = (): void => {
    const slider = document.getElementById('slider')
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 300
    }
  }

  const slideRight = (): void => {
    const slider = document.getElementById('slider')
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft + 300
    }
  }

  return (
    <section id='slider' className='realtive flex justify-center items-center max-h-48 w-full gap-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      <MdChevronLeft className='opacity-70 hover:opacity-100' onClick={slideLeft} size={40} color='white' />
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
      <MdChevronRight className='opacity-70 hover:opacity-100' onClick={slideRight} size={40} color='white' />
    </section>
  )
}
