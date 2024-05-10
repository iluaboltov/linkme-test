import { Card } from "@/components/UI/card";
import { Carousel } from "@/components/UI/carousel";
import { twMerge } from "tailwind-merge";

export const WidgetCarousel = ({className = ''}:
                                 {
                                   className?: string
                                 }) => {
  return (
    <div className={'flex flex-col flex-1 items-center min-w-[20vw] min-h-72 '}>
      <Card
        className={twMerge("flex flex-col h-full w-full text-white flex-1 gap-4 p-4 md:p-2 lg:p-4 bg-gradient-pink-blue " + className)}>
        <div className={"flex flex-col gap-1"}>
          <h2 className={"text-4xl lg:text-5xl  font-semibold tracking-wide"}>1000</h2>
          <div className={"flex flex-col text-[0.75rem] lg:text-sm opacity-40"}>
            <span>Great job at the event!</span>
            <span>Many new leads today, great job everyone</span>
          </div>
        </div>
        <Carousel />
      </Card>
      <div className={"flex items-end justify-center rounded-b-full h-3 lg:h-4 2xl:h-5 w-10/12 2xl:w-11/12 bg-[#575D81] opacity-60"}>
        <div className={'rounded-t-2xl h-full w-[89.667%] 2xl:w-[81.666%] bg-[#4F3D5EFF] blur-md'}></div>
      </div>
      <div className={"rounded-b-full h-1 md:h-2 lg:h-4 2xl:h-2 w-8/12 lg:w-9/12 2xl:w-9/12 bg-[#ab84cd] opacity-50"}>
      </div>
    </div>
  )
}