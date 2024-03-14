import { WeatherCardProps } from '../types/weather'
import { dateToDay } from '../utils/weather'

export function WeatherCard ({ handleDayChange, day, imageSrc, temperature = { max: 0, min: 0 }, conditions }: WeatherCardProps): JSX.Element {
  const dayName = dateToDay(day)

  if (day !== '' && imageSrc !== '' && temperature !== null && conditions !== '') {
    return (
      <article onClick={() => handleDayChange?.(day)} className='flex flex-col text-white justify-between items-center h-full aspect-[7/10] w-auto p-1 md:p-2 text-base md:text-lg text-center rounded-sm cursor-pointer backdrop-blur-sm bg-white/30 dark:bg-white/15 shadow-md hover:brightness-110 hover:scale-105 transition-transform ease-out duration-300'>
        <header className='flex flex-col items-center'>
          <h2 className='font-bold'>{dayName}</h2>
          <img src={`/assets/icons/${imageSrc}.png`} alt='' />
          <p className='text-neutral-100 leading-none font-medium pt-1'>{conditions}</p>
        </header>
        <footer className='flex flex-col mb-2'>
          <div className='flex gap-4'>
            <div className='flex flex-col items-center'>
              <span className=''>{`${Math.round(temperature.max)}°C`}</span>
              <span className='text-xs'>MAX</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className=''>{`${Math.round(temperature.min)}°C`}</span>
              <span className='text-xs'>MIN</span>
            </div>
          </div>
        </footer>
      </article>
    )
  } else {
    return (
      <div>Weather Card Skeleton</div>
    )
  }
}
