import { Card } from "@/components/UI/card";
import Link from "next/link";

//TODO LINK SHOULD BE REQUIRED IN FUTURE
export const WidgetStatistic = ({amount, label, link='#'}:
                                  {
                                    amount: string,
                                    label: string,
                                    link?: string
                                  }) => {
  return (
    <Card className={'flex flex-1 gap-2 justify-between md:h-20 xl:h-24 2xl:h-28 p-2 pb-3 pt-3 sm:p-4'}>
      <div className={'flex flex-col gap-2 justify-center'}>
        <span className={'text-secondary text-xl md:text-lg'}>
          {label}
        </span>
          <span className={'flex items-end text-primary font-medium tracking-wide text-xl md:text-lg leading-6'}>
          {amount}
        </span>
      </div>
      <div className={'flex flex-col gap-2 justify-center'}>
        <div
          className={'opacity-0 select-none w-full text-[0.6rem] text-lg md:text-sm xl:text-lg '}
        >
          .
        </div>
        <Link
          className={'text-[#7487fa] text-[0.6rem] text-lg md:text-sm xl:text-lg '}
          href={link}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}