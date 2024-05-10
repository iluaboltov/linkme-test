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
    <Card className={'flex flex-1 gap-2 justify-between md:h-20 xl:h-24 2xl:h-28 2xs:p-1 p-2 pb-3 pt-3 sm:p-4'}>
      <div className={'flex flex-col gap-2 justify-center'}>
        <span className={'text-secondary 2xs:text-base xs:text-lg text-xl md:text-lg 2xl:text-xl'}>
          {label}
        </span>
          <span className={'flex items-end text-primary font-medium tracking-wide 2xs:text-base xs:text-lg text-xl md:text-lg 2xl:text-xl leading-6'}>
          {amount}
        </span>
      </div>
      <div className={'flex flex-col gap-2 justify-center'}>
        <div
          className={'opacity-0 select-none w-full text-[0.6rem] 2xs:text-[0.2rem] xs:text-xs text-lg md:text-sm xl:text-lg 2xl:text-xl '}
        >
          .
        </div>
        <Link
          className={'text-[#7487fa] text-[0.6rem] 2xs:text-[0.2rem] xs:text-xs text-lg md:text-sm xl:text-lg 2xl:text-xl'}
          href={link}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}