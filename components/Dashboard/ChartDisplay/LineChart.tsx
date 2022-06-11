import Chart from 'chart.js/auto'
import { useEffect } from 'react'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#4a8829',
      borderColor: '#4a8829',
      pointStyle: 'circle',
      pointRadius: 7,
      pointHoverRadius: 10,
      data: [30, 22, 18, 30, 25, 30, 45, 35, 50],
    },
  ],
}

export default function LineChart(props) {
  useEffect(() => {
    const myChart = new Chart(document.getElementById('myChart') as HTMLCanvasElement, {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    })
  }, [])

  return (
    <div {...props}>
      <canvas id="myChart"></canvas>
    </div>
  )
}
