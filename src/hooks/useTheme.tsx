import { useEffect, useState } from 'react'
import { Themes } from '../types/weather'

export function useTheme ({ sunrise, sunset, currentTime }: { sunrise: EpochTimeStamp, sunset: EpochTimeStamp, currentTime: EpochTimeStamp }): Themes {
  const [theme, setTheme] = useState<Themes>('night')
  const hour = 3600

  useEffect(() => {
    if (currentTime >= sunrise - hour && currentTime <= sunrise + hour) {
      setTheme('morning')
      document.getElementById('root')?.classList.add('dark')
    } else if (currentTime >= sunset - hour && currentTime <= sunset + hour) {
      setTheme('evening')
      document.getElementById('root')?.classList.remove('dark')
    } else if (currentTime > sunrise && currentTime < sunset) {
      setTheme('noon')
      document.getElementById('root')?.classList.add('dark')
    } else {
      setTheme('night')
      document.getElementById('root')?.classList.remove('dark')
    }
  }, [sunrise, sunset, currentTime])

  return theme
}
