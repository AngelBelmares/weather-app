import { ForecastCardsProps } from '../types/weather'
import { WeatherCard } from './WeatherCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import { FreeMode } from 'swiper/modules'

export function ForecastCards ({ weatherData = [], setSelectedDay }: ForecastCardsProps): JSX.Element {
  const [atBeginning, setAtBeginning] = useState<boolean>(true)
  const [atEnd, setAtEnd] = useState<boolean>(false)

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
    <section className={`flex items-center justify-center w-full h-48 my-4 mx-1 overflow-x-visible relative pl-2 md:pl-0
      ${atBeginning ? '[mask-image:_linear-gradient(to_right,_black_calc(100%-50px),transparent_100%)]' : ''}
      ${atEnd ? '[mask-image:_linear-gradient(to_left,_black_calc(100%-50px),transparent_100%)]' : ''}
      ${!atBeginning && !atEnd ? '[mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]' : ''}
    `}
    >
      <Swiper
        modules={[FreeMode]}
        spaceBetween={6}
        slidesPerView='auto'
        freeMode
        className='w-full h-full'
        onReachBeginning={() => setAtBeginning(true)}
        onReachEnd={() => setAtEnd(true)}
        onFromEdge={() => {
          setAtBeginning(false)
          setAtEnd(false)
        }}
      >
        {weatherData.map((day, index) => (
          <SwiperSlide key={index} className='h-full aspect-[7/10] w-auto'>
            <WeatherCard
              handleDayChange={handleDayChange}
              day={day.day}
              imageSrc={day.imageSrc}
              temperature={day.temperature}
              conditions={day.conditions}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
