import { WeatherCardProps } from '../types/weather'
import { dateToDay } from '../utils/weather'

export function WeatherCard ({ handleDayChange, day, imageSrc, temperature = { max: 0, min: 0 }, conditions }: WeatherCardProps): JSX.Element {
  const dayName = dateToDay(day)

  if (day !== '' && imageSrc !== '' && temperature !== null && conditions !== '') {
    return (
      <article onClick={() => handleDayChange?.(day)} className='flex flex-col text-white justify-center items-center min-h-32 min-w-40 p-2 rounded-sm cursor-pointer backdrop-blur-sm bg-white/20 shadow-md hover:brightness-110'>
        <header className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-lg'>{dayName}</h2>
          <img src={`../public/assets/icons/${imageSrc}.png`} alt='' />
          <p className='text-neutral-200'>{conditions}</p>
        </header>
        <footer className='flex flex-col text-lg mt-3'>
          <div className='flex gap-4'>
            <span>{`${Math.round(temperature.max)}°C`}</span>
            <span>{`${Math.round(temperature.min)}°C`}</span>
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
