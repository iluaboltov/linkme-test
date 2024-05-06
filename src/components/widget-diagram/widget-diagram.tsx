import { Card } from "@/components/UI/card";
import { DropdownText } from "@/components/UI/dropdown-text";
import { DiagramItem } from "@/components/diagram-item";
import Link from "next/link";

export const WidgetDiagram = () => {
  return (
    <Card className={"flex flex-col min-w-[20vw] flex-1 min-h-72 p-4 md:p-6 md:pt-8 md:pb-8 gap-2 sm:gap-6"}>
      <div className={'flex flex-col gap-2'}>
        <span className={"text-secondary text-sm md:text-md xl:text-2xl"}>New Leads</span>
        <span className={"text-4xl md:text-5xl font-extrabold"}>742</span>
        <span className={"text-secondary text-sm md:text-md xl:text-2xl"}>Leads for event this <DropdownText
          labels={["week", "month", "year"]} /></span>

      </div>
      <div className={"flex justify-around items-end"}>
        <DiagramItem className={"h-32 lg:h-48"} />
        <DiagramItem className={"h-24 lg:h-40"} />
        <DiagramItem className={"h-16 lg:h-32"} />
        <DiagramItem className={"h-12 lg:h-24"} />
        <DiagramItem className={"h-8 lg:h-20"} />
        <DiagramItem className={'h-6 lg:h-12'}/>
      </div>
      <div
        className={'flex justify-center'}
      >
        <Link
          className={'text-blue text-sm md:text-md xl:text-xl mt-4'}
          href={"#"}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}