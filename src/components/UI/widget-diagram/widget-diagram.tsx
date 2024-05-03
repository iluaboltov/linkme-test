import { Card } from "@/components/UI/card";
import { DropdownText } from "@/components/UI/dropdown-text";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";

export const WidgetDiagram = () => {
  return (
    <Card className={"flex flex-col min-w-[20vw] flex-1 min-h-72 p-4 gap-2"}>
      <span className={'text-secondary xl:text-2xl'}>New Leads</span>
      <span className={'text-5xl font-bolder xl:text-xl'}>742</span>
      <span className={'text-secondary xl:text-2xl'}>Leads for event this <DropdownText labels={['week', 'month', 'year']} /></span>

      <div className={'flex justify-around items-end gap-2'}>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-48 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-40 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-36 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-28 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-24 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
        <span
          className={'relative flex-1 max-w-12 xl:max-w-16 rounded-t-lg border border-solid border-blue border-opacity-40 h-14 bg-gradient-blue-white text-blue'}>
          <AccountCircleOutlinedIcon
            className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
            sx={{fontSize: { xs: 16, sm: 26, md: 36, lg: 40, xl: 46} }}
          />
        </span>
      </div>
      <div
        className={'flex justify-center'}
      >
        <Link
          className={'text-blue text-md xl:text-xl mt-4'}
          href={"#"}
        >
          See details
        </Link>
      </div>
    </Card>
  )
}