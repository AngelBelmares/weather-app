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
    <article className='flex flex-col items-center text-center w-1/2 justify-center text-xl text-white p-4 bg-white/20 rounded-sm shadow-lg backdrop-blur-sm'>
      <h2 className='font-bold text-3xl text-prett'>{conditions}</h2>
      <p className='text-neutral-200 m-2'>{date}</p>
      <img
        className='w-1/2'
        src={`./assets/icons/${icon}.png`}
        alt='Cloudy'
      />
      <p className='text-2xl font-bold'>{`${Math.round(temperature)} °C`}</p>
      <p>{precip}</p>
    </article>
  )
}
