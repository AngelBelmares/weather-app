import { CitySVG1 } from './CitySVG1'
import { CitySVG2 } from './CitySVG2'
import { BackgroundProps } from '../types/weather'

export function Background ({ theme }: BackgroundProps): JSX.Element | null {
  theme = 'evening'

  if (theme === 'morning') {
    return <MorningBackground />
  } else if (theme === 'noon') {
    return <NoonBackground />
  } else if (theme === 'evening') {
    return <EveningBackground />
  } else if (theme === 'night') {
    return null
  } else {
    return null
  }
}

function MorningBackground (): JSX.Element {
  const theme = 'morning'
  return (
    <div className='bg-white fixed -z-10 w-screen h-screen overflow-hidden'>
      <div style={{
        position: 'absolute',
        width: '100vw',
        margin: 0,
        padding: 0,
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(92,243,255,1) 0%, rgba(247,240,71,0.6306897759103641) 100%)',
        backgroundPosition: 'center center'
      }}
      />
      <div />
      <div className='z-50 absolute h-full w-full -bottom-64 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG1 theme={theme} />
      </div>
      <div className='z-40 absolute h-full w-full -bottom-7 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG2 theme={theme} />
      </div>
    </div>
  )
}

function NoonBackground (): JSX.Element {
  const theme = 'noon'
  return (
    <div className='bg-white fixed -z-10 w-screen h-screen overflow-hidden'>
      <div style={{
        position: 'absolute',
        width: '100vw',
        margin: 0,
        padding: 0,
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(50,206,254,0.63) 0%, rgba(198,244,255,0.9136029411764706) 100%)',
        backgroundPosition: 'center center'
      }}
      />
      <div />
      <div className='z-50 absolute h-full w-full -bottom-64 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG1 theme={theme} />
      </div>
      <div className='z-40 absolute h-full w-full -bottom-7 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG2 theme={theme} />
      </div>
    </div>
  )
}

function EveningBackground (): JSX.Element {
  const theme = 'evening'
  return (
    <div className='bg-white fixed -z-10 w-screen h-screen overflow-hidden'>
      <div style={{
        position: 'absolute',
        width: '100vw',
        margin: 0,
        padding: 0,
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(190,170,220,1) 0%, rgba(230,110,130,1) 100%)',
        backgroundPosition: 'center center'
      }}
      />
      <div />
      <div className='z-50 absolute h-full w-full -bottom-64 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG1 theme={theme} />
      </div>
      <div className='z-40 absolute h-full w-full -bottom-7 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG2 theme={theme} />
      </div>
    </div>
  )
}
