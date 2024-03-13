import { Themes } from '../types/weather'

interface BackgroundProps {
  theme: Themes
}

export function Background ({ theme }: BackgroundProps): JSX.Element {
  const getTheme = (theme: Themes): string => {
    if (theme === 'morning') {
      return '/assets/images/morning.webp'
    } else if (theme === 'noon') {
      return '/assets/images/noon.webp'
    } else if (theme === 'evening') {
      return '/assets/images/evening.webp'
    }
    return '/assets/images/night.webp'
  }

  const imageSrc = getTheme(theme)

  return (
    <div className='fixed w-screen h-screen aspect-video -z-10'>
      <img className='h-full w-full object-cover' src={`${imageSrc}`} alt='' />
    </div>
  )
}
