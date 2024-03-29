export interface WeatherCardProps {
  day: string
  conditions: string
  imageSrc: string
  temperature: {
    max: number
    min: number
  }
  handleDayChange?: (day: any) => void
}

export interface WeatherData {
  day: string
  conditions: string
  imageSrc: string
  temperature: {
    current: number
    max: number
    min: number
  }
  hours: Array<{
    datetime: string
    temp: number
  }>
  description: string
}

export interface ForecastCardsProps {
  weatherData: WeatherData[]
  setSelectedDay: (day: any) => void
}

export type Themes = 'morning' | 'noon' | 'evening' | 'night'

export interface BackgroundProps {
  theme: Themes
}

export interface CurrentConditions {
  conditions: string
  dateTimeEpoch: EpochTimeStamp
  icon: string
  temperature: number
  precip: number
  sunriseEpoch: EpochTimeStamp
  sunsetEpoch: EpochTimeStamp
}

export interface LocationInfo {
  name: string
  latitude: number
  longitude: number
  tzoffset: number
  sunriseEpoch: EpochTimeStamp
  sunsetEpoch: EpochTimeStamp
}
