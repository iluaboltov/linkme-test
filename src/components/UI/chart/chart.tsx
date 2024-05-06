import { getChartData } from "@/api/getChartData";
import { Card } from "@/components/UI/card"
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement, LinearScale, PointElement, Title, Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const Chart = () => {
  const [chartData, setChartData] = useState<ChartData>()
  const [isLoading, setIsLoading] = useState(true)

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true
  };
  useEffect(()=>{
    setIsLoading(true)
    getChartData().then(chartDataRes => {
      setChartData({
        datasets: [{
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          borderColor: 'rgb(53, 162, 235)',
          data: chartDataRes.record.data,
          tension: 0.5,
        }],
        labels: chartDataRes.record.dates.map((chartDate)=>{return(chartDate.date)})
      })
    })
    setIsLoading(false)
  },[])
  //TODO CHANGE SKELETON
  if (isLoading || !chartData) {
    return (
      <div className={'w-full h-[40vh] bg-light-blue rounded-lg animate-pulse'}>
      </div>
    )
  }
  //TODO Create right data type
  return (
    <Card>
      {/*@ts-ignore*/}
      <Line data={chartData} options={options} />
    </Card>
  )
}