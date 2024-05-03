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
    <Card className={'flex flex-1 justify-between h-20 p-4'}>
      <div className={'flex flex-col justify-between'}>
      <span className={'text-secondary text-md'}>
        {label}
      </span>
        <span className={'text-primary font-medium tracking-wide'}>
        {amount}
      </span>
      </div>
      <div className={'flex flex-col-reverse'}>
        <Link
          className={'text-[#7487fa] text-sm'}
          href={link}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}