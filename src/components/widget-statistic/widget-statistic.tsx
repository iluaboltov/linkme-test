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
    <Card className={'flex flex-1 gap-2 justify-between h-14 md:h-16 lg:h-24 p-2 pb-3 pt-3 sm:p-4'}>
      <div className={'flex flex-col justify-center'}>
        <span className={'text-secondary text-md text-xs sm:text-sm lg:text-lg 2xl:text-xl'}>
          {label}
        </span>
          <span className={'text-primary font-medium tracking-wide text-xs sm:text-sm lg:text-lg 2xl:text-xl'}>
          {amount}
        </span>
      </div>
      <div className={'flex md:justify-start flex-col-reverse'}>
        <Link
          className={'text-[#7487fa] text-[0.6rem] lg:text-sm'}
          href={link}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}