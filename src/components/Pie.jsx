
import { Doughnut } from 'react-chartjs-2'
import './pie.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Pie = () => {
    const data = {
        labels: ['jan', 'feb', 'mar'],
        datasets: [
            {
                label: 'products',
                data: [20, 50, 70],
                backgroundColor: 'aqua',
            }
        ]
    }


    //   const options = {
    //     plugins: {
    //       legend: {
    //         display: false
    //       }
    //     },
    //     maintainAspectRatio: false,
    //     scales: {
    //       x: {
    //         grid: {
    //           display: false
    //         }
    //       },
    //       y: {
    //         ticks: {
    //           display: false
    //         },
    //         grid: {
    //           display: false
    //         }
    //       },

    //     }
    //   }
    return (
        <div class='doughnut-container'>
            <div class='doughnut-text'>
                <p>Customers</p>
                <p>Customers That Buys Products</p>
            </div>
            <div class='doughnut-chart'>
                <Doughnut data={data} />
            </div>
        </div>

    )

    }
export default Pie