import { Card } from "@/components/UI/card";
import { Carousel } from "@/components/UI/carousel";
import { Chart } from "@/components/UI/chart";
import { WidgetDiagram } from "@/components/UI/widget-diagram";
import { WidgetStatistic } from "@/components/UI/widget-statistic";
export const ChartSection = () => {
  return (
    <section className={'flex flex-col max-w-[50vw] gap-4 '}>
      <div className={'flex gap-4'}>
        <WidgetStatistic
          amount={"2,879"}
          label={"Leads"}
        />
        <WidgetStatistic
          amount={"53"}
          label={"Events"}
        />
        <WidgetStatistic
          amount={"26"}
          label={"Team"}
        />
      </div>

      <Chart/>
      {/*TODO CHANGE GRADIENT*/}
      <div className={'flex gap-4'}>
        <Card className={"relative flex flex-col text-white flex-1 p-4 min-w-[20vw] min-h-72 bg-gradient-pink-blue"}>
          <div className={'flex flex-col gap-1'}>
            <h2 className={"text-4xl font-semibold tracking-wide"}>1000</h2>
            <div className={"flex flex-col text-sm opacity-60"}>
              <span>Great job at the event!</span>
              <span>Many new leads today, great job everyone</span>
            </div>
          </div>
          <Carousel/>
        </Card>
        <WidgetDiagram/>
      </div>
    </section>
  )
}