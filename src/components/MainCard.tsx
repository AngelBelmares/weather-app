import { CurrentConditions } from '../types/weather'

interface MainCardProps {
  currentConditions: CurrentConditions
  tzoffset: number
}

export function MainCard ({ currentConditions, tzoffset }: MainCardProps): JSX.Element {
  const { conditions, dateTimeEpoch, icon, temperature, precip } = currentConditions
  const offset = tzoffset * 60 * 60 | 0

  const date = new Date((dateTimeEpoch + offset) * 1000).toUTCString().split(' ').slice(0, 5).join(' ')

  return (
    <article className='flex flex-col items-center text-center w-1/2 justify-center text-xl text-white p-4 bg-white/30 dark:bg-white/15 rounded-sm shadow-lg backdrop-blur-sm '>
      <h2 className='font-bold text-3xl text-prett'>{conditions}</h2>
      <p className='text-neutral-100 m-2 dark:text-white'>{date}</p>
      <img
        className='w-1/2'
        src={`./assets/icons/${icon}.png`}
        alt='Cloudy'
      />
      <p className='text-4xl font-bold'>{`${Math.round(temperature)} °C`}</p>
      <p>{precip}</p>
    </article>
  )
}
