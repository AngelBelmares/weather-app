import { WeatherCardProps } from '../types/weather'
import { dateToDay } from '../utils/weather'

export function WeatherCard ({ day, imageSrc, temperature, conditions }: WeatherCardProps): JSX.Element {
  const dayName = dateToDay(day)

  return (
    <article className='flex flex-col text-white justify-center items-center min-h-32 min-w-40 p-2 bg-slate-700 backdrop-blur-sm rounded-sm'>
      <header className='flex flex-col justify-center items-center'>
        <h2 className='font-bold text-lg'>{dayName}</h2>
        <img src={`../public/assets/icons/${imageSrc}.png`} alt='' />
        <p className='text-neutral-200'>{conditions}</p>
      </header>
      <footer className='flex flex-col text-lg mt-3'>
        <span className='self-center'>{`${temperature.current} °C`}</span>
        <div className='flex gap-4'>
          <span>{`${Math.round(temperature.max)}°C`}</span>
          <span>{`${Math.round(temperature.min)}°C`}</span>
        </div>
      </footer>
    </article>
  )
}