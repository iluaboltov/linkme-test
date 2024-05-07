import { Chart } from "@/components/UI/chart";

import { WidgetCarousel } from "../widget-carousel";
import { WidgetDiagram } from "../widget-diagram";
import { WidgetStatistic } from "../widget-statistic";
export const ChartSection = () => {
  return (
    <section className={'flex flex-col h-full max-w-[100vw] md:min-w-[30rem] lg:max-w-[50vw] 2xl:max-w-[45vw] gap-6 md:gap-4'}>
      <div className={'flex gap-2 sm:gap-4'}>
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
      <div className={'flex flex-1 md:max-h-96 lg:max-h-none gap-4'}>
        <WidgetCarousel/>
        <WidgetDiagram />
      </div>
    </section>
  )
}