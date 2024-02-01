const labels = ['12 PM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']

export const getOptions = (minTemp: number, maxTemp: number): any => ({
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'white',
        font: {
          size: 14
        }
      }
    },
    y: {
      grid: {
        display: false
      },
      min: minTemp - 3,
      max: maxTemp + 3,
      ticks: {
        display: false,
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
      display: false,
      text: 'Temperature',
      color: 'white',
      font: {
        size: 20
      }
    },
    filler: {
      propagate: true
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (context: string | any) {
          return `${String(context.parsed.y)}°C`
        }
      }
    }
  },
  maintainAspectRatio: false
})

export const getData = (day: any): any => ({
  labels,
  datasets: [{
    datalabels: {
      color: 'white',
      align: 'top',
      font: {
        size: 18
      }
    },
    data: day.hours.map(hour => Math.round(hour.temp)),
    borderColor: 'rgba(255, 255, 255, 0.8)',
    tension: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fill: 'start'
  }]
})