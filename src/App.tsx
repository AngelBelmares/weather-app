import { useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { ForecastCards } from './components/ForecastCards'
import apiRespone from './utils/api_response_example.json'
import { Line } from 'react-chartjs-2'

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
import { sign } from 'chart.js/helpers'

const weatherData = apiRespone.days

const mappedWeatherData = weatherData?.map(day => ({
  day: day.datetime,
  conditions: day.conditions,
  imageSrc: day.icon,
  temperature: {
    current: day.temp,
    max: day.tempmax,
    min: day.tempmin
  },
  description: day.description
}))

function App (): JSX.Element {
  const [selectedDay, setSelectedDay] = useState(apiRespone.days[0])

  return (
    <>
      <Background theme='night' />
      <main className='flex flex-col items-center justify-between w-full h-1/2 p-3 md:w-3/4 gap-8'>
        <ForecastCards
          weatherData={mappedWeatherData}
        />
        <TemperatureChart day={selectedDay} />
      </main>
    </>
  )
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function TemperatureChart ({ day }: any): JSX.Element {
  const maxTemp = Math.max(...day.hours.map((hour: any) => hour.temp))
  const minTemp = Math.min(...day.hours.map((hour: any) => hour.temp))

  const labels = ['12 PM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 14
          }
        }
      },
      y: {
        min: minTemp - 3,
        max: maxTemp + 3,
        ticks: {
          color: 'white',
          font: {
            size: 14
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Temperature',
        color: 'white',
        font: {
          size: 20
        }
      },
      filler: {
        propagate: true
      }
    }
  }
  const data = {
    labels,
    datasets: [{
      data: day.hours.map(hour => hour.temp),
      borderColor: 'rgba(255, 255, 255, 0.8)',
      tension: 0.5,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      fill: 'start'
    }]
  }
  return (
    <section className='flex w-full h-full justify-center backdrop-blur-sm'>
      <Line data={data} options={options} />
    </section>
  )
}

export default App
