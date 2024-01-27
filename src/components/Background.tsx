import { CitySVG1 } from './CitySVG1'
import { CitySVG2 } from './CitySVG2'

type Themes = 'morning' | 'noon' | 'evening' | 'night'

interface BackgroundProps {
  theme: Themes
}

function getBackground (theme: Themes): string {
  switch (theme) {
    case 'morning':
      return 'linear-gradient(180deg, rgba(92,243,255,1) 0%, rgba(247,240,71,0.6306897759103641) 100%)'
    case 'noon':
      return ''
    case 'evening':
      return ''
    case 'night':
      return ''
  }
}

export function Background ({ theme }: BackgroundProps): JSX.Element {
  const background = getBackground('morning')

  return (
    <div className='bg-white fixed -z-10 w-screen h-screen overflow-hidden'>
      <div style={{
        position: 'absolute',
        width: '100vw',
        margin: 0,
        padding: 0,
        height: '100vh',
        background,
        backgroundPosition: 'center center'
      }}
      />
      <div />
      <div className='z-50 absolute h-full w-full -bottom-64 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG1 theme='morning' />
      </div>
      <div className='z-40 absolute h-full w-full -bottom-7 left-1/2 transform -translate-x-1/2 overflow-hidden'>
        <CitySVG2 theme='morning' />
      </div>
    </div>
  )
}
