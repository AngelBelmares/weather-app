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

export function TemperatureChart ({ day }: any): JSX.Element {
  if (day == null || day?.hours == null) return (<div>Day is not defined</div>)

  const maxTemp = Math.max(...day.hours.map((hour: any) => hour.temp))
  const minTemp = Math.min(...day.hours.map((hour: any) => hour.temp))

  const data = getData(day)
  const options = getOptions(minTemp, maxTemp)

  return (
    <section className='flex w-full h-full justify-center backdrop-blur-sm'>
      <div className='w-full'>
        <Line data={data} options={options} />
      </div>
    </section>
  )
}
