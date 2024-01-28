export interface WeatherCardProps {
  day: string
  conditions: string
  imageSrc: string
  temperature: {
    current: number
    max: number
    min: number
  }
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
  description: string
}

export interface WeatherTimeLineProps {
  weatherData: WeatherData[]
}

export type Themes = 'morning' | 'noon' | 'evening' | 'night'

export interface BackgroundProps {
  theme: Themes
}
