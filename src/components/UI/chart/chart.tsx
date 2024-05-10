import { getChartData } from "@/api/getChartData";
import { Card } from "@/components/UI/card"
import { CustomTooltip } from "@/components/UI/custom-tooltip";
import { LineProps } from "@/types/LineProps";
import { ChartRes } from "@/types/chartRes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  Point,
  PointElement, ScriptableContext, Title, Tooltip,
} from "chart.js";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Line, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export const Chart = () => {
  const chartRef = useRef<ChartJS<"line", number[], string>>()
  const [chartProps, setChartProps] = useState<LineProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeChartIndex, setActiveChartIndex] = useState<number>()
  const [initialChartData, setInitialChartData] = useState<ChartRes>()
  const [leadsAmount, setLeadsAmount] = useState(0)
  //CHECK IF THE POINT IS ACTIVE
  const alternatePointStyle = (ctx: ScriptableContext<'line'>) => {
    const index = ctx.dataIndex ?? 0;

    const activeIndex = activeChartIndex ? activeChartIndex : activeChartIndex === 0 ? 0 : initialChartData?.record?.data?.length

    if (!activeIndex) return;

    const isLastIndex = index === activeIndex

    return isLastIndex ? "circle" : false
  }

  // ADD DASH LINE ON CLICK
  const onClickSkip = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const {current: chart} = chartRef;

    if (!chart || isLoading) return;

    const lastIndex = chart?.config?.data.datasets[0].data.length-1

    if (!lastIndex) return;

    const dotElement = getElementAtEvent(chart, event)

    if (dotElement.length === 0 || dotElement[0].index === lastIndex || dotElement[0].index === 0) return;

    const lineSlice = dotElement[0].index === 0 ? initialChartData?.record.data.slice(0, dotElement[0].index) : initialChartData?.record.data.slice(0, dotElement[0].index+1);
    const dashedSlice: (Point | null | number)[] = initialChartData?.record.data.slice(dotElement[0].index) ?? []

    for(let i = 0; i < dotElement[0].index; i++) {
      dashedSlice?.unshift(null)
    }

    // @ts-ignore
    chart.config.data.datasets[1].data = [...dashedSlice]
    chart.config.data.datasets[0].data = [...lineSlice ?? []]
    if (!(chart.config.options)) return;
    chart.config.options.animation = { duration: 100, easing: "easeInOutSine"}
    setActiveChartIndex(dotElement[0].index)
  }

  // REMOVES ALL POINTS AND LEAVES ONE DOT
  useEffect(() => {
    const {current: chart} = chartRef;
    if (activeChartIndex == undefined || !chart) return;
    setChartProps((prevState)=> {
      return {
        data: {
          datasets: prevState?.data?.datasets ?? [],
          labels: prevState?.data?.labels ?? [],
        },
        options: {
          ...prevState?.options,
          animation: {
            easing: "easeInCubic"
          },
          elements: {
            point: {
              hitRadius: 20,
              pointStyle: alternatePointStyle,
            },
          }
          }
      }
    })
    chart.update()
  }, [activeChartIndex]);

  useEffect(() => {
    if (!initialChartData) return;
    setLeadsAmount(initialChartData.record.data.reduce((previousValue, currentValue)=>previousValue+currentValue))
    setChartProps({
        data: {
          datasets: [{
            backgroundColor: (({chart: {ctx}}: {chart: { ctx: CanvasRenderingContext2D}}) => {
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, "rgb(138,159,252)");
              gradient.addColorStop(1, "rgba(250,94,248,0)");
              return gradient;
            }),
            borderColor: (({chart: {ctx}}: {chart: { ctx: CanvasRenderingContext2D}}) => {
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, "rgb(86,116,252)");
              gradient.addColorStop(1, "rgba(250,94,248,0)");
              return gradient;
            }),
            borderWidth: 4,
            data: initialChartData.record.data,
            fill: "start",
            pointBorderWidth: 6,
            tension: 0.5,
          }, {
            borderColor: 'rgb(124,124,124)',
            borderDash: [5,5],
            borderWidth: 1,
            data: [],
            pointBorderWidth: 0,
            tension: 0.5,
          }
          ],
          labels: initialChartData.record.dates.map((chartLabel)=>{
            return chartLabel["date"]
          })
        },
        options: {
          animation: {
            /*@ts-ignore*/
            x: {
              delay(ctx:{index: number, xStarted: boolean, yStarted: boolean} & ScriptableContext<"line">) {
                const dataLength = initialChartData?.record.data.length

                if (!ctx || !dataLength) return;

                if (ctx.type !== 'data' || ctx.xStarted) {
                  return 0;
                }
                ctx.xStarted = true;
                return ctx.index * 3500 / dataLength ?? 0;
              },
              duration: 3500 / initialChartData.record.data.length,
              easing: 'linear',
              from: NaN, // the point is initially skipped
              type: 'number'
            },
            y: {
              delay(ctx: {index: number, xStarted: boolean, yStarted: boolean} & ScriptableContext<"line">) {
                const dataLength = initialChartData?.record.data.length
                if (!ctx || !dataLength) return;

                if (ctx.type !== 'data' || ctx.yStarted) {
                  return 0;
                }
                ctx.yStarted = true;
                return ctx.index * 3500 / dataLength ?? 0;
              },
              duration: 3500 / initialChartData.record.data.length,
              easing: 'linear',
              from: 1000,
              type: 'number'
            }
          },
          elements: {
            point: {
              pointStyle: alternatePointStyle,
            },
          },
          layout: {
            padding: 20,
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false,
              external: (ctx)=>CustomTooltip(ctx, initialChartData),
            },
          },
          responsive: true, scales: {
            x: {
              ticks: {
                font: {
                  size: () => {
                    if (!window.outerWidth) return;

                    if (window.outerWidth < 560) {
                      return 6;
                    }

                    if (window.outerWidth > 560 && window.outerWidth < 1000) {
                      return 8;
                    }
                    if (window.outerWidth > 1000 && window.outerWidth < 1500 ) {
                      return 8;
                    }
                    if (window.outerWidth > 1500) {
                      return 15;
                    }
                  }
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: () => {
                    if (!window.outerWidth) return;

                    if (window.outerWidth < 560) {
                      return 6;
                    }

                    if (window.outerWidth > 560 && window.outerWidth < 1000) {
                      return 8;
                    }
                    if (window.outerWidth > 1000 && window.outerWidth < 1500 ) {
                      return 8;
                    }
                    if (window.outerWidth > 1500) {
                      return 15;
                    }
                  }
                }
              }
            }
          },
        },
    })
    setActiveChartIndex(initialChartData?.record?.data.length-1)
  }, [initialChartData]);

  useEffect(()=>{
    setIsLoading(true)
    getChartData().then(chartDataRes => {
      setInitialChartData(chartDataRes)
    })
    setIsLoading(false)
  },[])

  //TODO CHANGE SKELETON
  if (!chartProps || isLoading) {
    return (
      <div className={'w-full h-80 lg:h-96 bg-light-blue rounded-lg animate-pulse'}>
      </div>
    )
  }

  return (
    <Card>
      <div className={'flex justify-between p-4 text-secondary'}>
        <span className={'flex justify-center items-center xs:text-base text-lg xl:text-2xl'}>Overview</span>
        <div className={'flex gap-2'}>
          <div className={'flex pl-4 pr-4 pt-1 pb-1 justify-center 2xs:text-xs xs:text-sm items-center rounded-full bg-light-blue/50'}>
            <span>CES</span>
            <span className={'flex justify-center items-center'}><KeyboardArrowDownIcon sx={{ fontSize: { md: 28 } }} /></span>
          </div>
          <div className={'flex pl-4 pr-4 pt-1 pb-1 justify-center 2xs:text-xs xs:text-sm items-center rounded-full bg-light-blue/50'}>
            <span>{initialChartData?.record.dates[0].date} - {initialChartData?.record.dates[initialChartData?.record.dates.length - 1].date}</span>
            <span className={'flex justify-center items-center'}><KeyboardArrowDownIcon sx={{ fontSize: { md: 28 } }} /></span>
          </div>
        </div>
      </div>
      <div className={'relative'}>
        <Line className={"relative min-h-[20rem]"}
              data={chartProps?.data!}
              onMouseMove={(e) => onClickSkip(e)}
              options={chartProps?.options}
              ref={chartRef} />
        <div className={'absolute flex flex-col bg-white p-2 gap-2 top-1 left-0 pl-4 pb-4'}>
          <span className={'text-primary text-4xl lg:text-3xl font-semibold tracking-wide'}>{leadsAmount}</span>
          <div className={'flex gap-2 text-sm md:text-base xl:text-lg '}>
            <span className={'text-secondary'}>Number of new leads</span>
            <Link
              className={'text-blue'}
              href={'#'}
            >
              See details
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}