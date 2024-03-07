import { useEffect, useState } from 'react'
import { Themes } from '../types/weather'

export function useTheme ({ sunrise, sunset, currentTime }: { sunrise: EpochTimeStamp, sunset: EpochTimeStamp, currentTime: EpochTimeStamp }): Themes {
  const [theme, setTheme] = useState<Themes>('night')
  const currentTimeDate = new Date(currentTime * 1000)
  const sunriseDate = new Date(sunrise * 1000)
  const sunsetDate = new Date(sunset * 1000)
  console.log({ currentTimeDate, sunriseDate, sunsetDate })

  const hour = 3600

  useEffect(() => {
    if (currentTime >= sunrise - hour && currentTime <= sunrise + hour) {
      setTheme('morning')
    } else if (currentTime >= sunset - hour && currentTime <= sunset + hour) {
      setTheme('evening')
    } else if (currentTime > sunrise && currentTime < sunset) {
      setTheme('noon')
    } else {
      setTheme('night')
    }
  }, [sunrise, sunset, currentTime])

  console.log(theme)
  return theme
}
