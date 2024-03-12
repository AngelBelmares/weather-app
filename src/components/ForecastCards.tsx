import { ForecastCardsProps } from '../types/weather'
import { WeatherCard } from './WeatherCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useSliderHandlers } from '../hooks/useSliderHandlers'

export function ForecastCards ({ weatherData = [], setSelectedDay }: ForecastCardsProps): JSX.Element {
  const { slideLeft, slideRight } = useSliderHandlers()

  if (!Array.isArray(weatherData)) {
    console.log(weatherData)
    return <div>Error: weatherData is not an array</div>
  }

  const handleDayChange = (day: string): void => {
    const selectedDay = weatherData.find(data => data.day === day)
    if (selectedDay != null) {
      setSelectedDay(selectedDay)
    }
  }

  return (
    <section className='relative flex items-center justify-center h-full w-full'>
      <MdChevronLeft className='opacity-70 hover:opacity-100 hover:scale-125 transition-transform duration-200' onClick={slideLeft} size={40} color='white' />
      <div id='slider' className='flex items-center justify-start w-fit gap-2 overflow-y-visible overflow-x-hidden py-6 whitespace-nowrap scroll-smooth scrollbar-hide [mask-image:_linear-gradient(to_right,transparent_0,_black_120px,_black_calc(100%-120px),transparent_100%)]'>
        {weatherData.map((data, index) => {
          const { day, imageSrc, temperature, conditions } = data
          return (
            <WeatherCard
              key={index}
              day={day}
              imageSrc={imageSrc}
              temperature={temperature}
              conditions={conditions}
              handleDayChange={handleDayChange}
            />
          )
        })}
      </div>
      <MdChevronRight className='opacity-70 hover:opacity-100 hover:scale-125 transition-transform duration-200' onClick={slideRight} size={40} color='white' />
    </section>
  )
}
