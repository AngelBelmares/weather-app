import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { getData, getOptions } from '../utils/chartConfig'
import { WeatherData } from '../types/weather'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
)

interface TemperatureChartProps {
  weatherData: WeatherData
}

export function TemperatureChart ({ weatherData }: TemperatureChartProps): JSX.Element {
  if (weatherData == null || weatherData?.hours == null) return (<div>Day is not defined</div>)

  const maxTemp = Math.max(...weatherData.hours.map((hour) => hour.temp))
  const minTemp = Math.min(...weatherData.hours.map((hour) => hour.temp))

  const data = getData(weatherData)
  const options = getOptions(minTemp, maxTemp)
  const date = new Date(weatherData.day).toLocaleString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className='flex flex-col items-center gap-y-5 w-full h-full justify-center text-white dark:text-gray-800 font-semibold'>
      <h2 className='text-2xl'>{date}</h2>
      <div className='w-full h-56 '>
        <Line data={data} options={options} />
      </div>
    </section>
  )
}
