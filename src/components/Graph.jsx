
import { Bar, Doughnut } from 'react-chartjs-2'
import './graph.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend

)

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Graph = () => {
  const data = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    datasets: [
      {
        label: 'month',
        data: [20, 50, 70, 30, 40, 20, 45, 80, 60, 50, 65, 50],
        backgroundColor: ["rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(48, 120, 221)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)","rgb(227, 224, 224)",],
        borderRadius: 8,
      }
    ]
  }

  const data2 = {
    labels: [],
    datasets: [
      {
        label: 'customer',
        data: [20, 30, 40],
        backgroundColor: ["rgb(224, 72, 163)","rgb(48, 120, 221)","rgb(227, 224, 224)"]
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },

    }
  }

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = 'bolder 40px';
      ctx.fillStyle = 'black';
      ctx.textBaseline = 'middle';
      ctx.fillText('65% ', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)

    }
  }

  const sliceThickness = {
    id : 'sliceThickness',
    beforeDraw(chart,plugins){
       
      let sliceThicknessPixel = [230,250,300];
      sliceThicknessPixel.forEach((thickness,index)=>{
        chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thickness) *100;
      })
    }
  }
  return (
    <div class='graphs-container'>
      <div class='graph-container'>
        <div class='graph-text'>
          <div className='flex flex-col mt-1 ml-4'>
            <p className='font-bold'>Overview</p>
            <p className='text-sm text-slate-400'>Monthly Earning</p>
          </div>
          <select name="monthly" id="Days" className='rounded-sm mr-2'>
            <option value="Quaterly">Quaterly</option>
            <option value="Half Yearly">Half Yearly</option>
            <option value="yearly">yearly</option>
          </select>
        </div>
        <div class='graph-chart'><Bar data={data} options={options} /></div>
        
      </div>

      <div class='doughnut-container'>
        <p className='font-bold text-lg ml-4 mt-2'>Customers</p>
        <p className='text-sm text-slate-400 ml-4'>Customers That Buy Products</p>
        <div class='doughnut'><Doughnut data={data2} plugins={[textCenter,sliceThickness]} /></div>
      </div>

    </div>

  )
}

export default Graph