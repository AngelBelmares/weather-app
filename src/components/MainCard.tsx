import { CurrentConditions } from '../types/weather'

interface MainCardProps {
  currentConditions: CurrentConditions
  tzoffset: number
}

export function MainCard ({ currentConditions, tzoffset }: MainCardProps): JSX.Element {
  const { conditions, dateTimeEpoch, icon, temperature } = currentConditions
  const offset = tzoffset * 60 * 60 | 0

  const date = new Date((dateTimeEpoch + offset) * 1000).toUTCString().split(' ').slice(0, 5).join(' ')

  return (
    <article className='flex flex-col items-center text-center min-w-64 max-w-96 justify-center text-lg md:text-xl text-white p-3 md:p-4 md:bg-white/30 bg-transparent md:dark:bg-white/15 rounded-sm md:shadow-lg md:backdrop-blur-sm '>
      <h2 className='font-bold text-3xl text-pretty'>{conditions}</h2>
      <p className='text-neutral-100 m-0 md:m-2 dark:text-white'>{date}</p>
      <div className='flex w-full h-36 md:h-28 items-center justify-center gap-x-4 md:w-1/2'>
        <img
          className='h-full w-auto md:w-1/2 md:h-auto'
          src={`./assets/icons/${icon}.png`}
          alt='Cloudy'
        />
        <p className='text-5xl font-bold'>{`${Math.round(temperature)}°C`}</p>
      </div>
    </article>
  )
}
