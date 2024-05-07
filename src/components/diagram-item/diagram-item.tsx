import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { twMerge } from "tailwind-merge";

export const DiagramItem = ({className} :
                              {
                                className ?: string,
                              }) => {
  return (
    <span
      className={twMerge('relative flex-1 xs:max-w-6 max-w-8 md:max-w-5 lg:max-w-8 xl:max-w-8.5 h-14 rounded-t-md border border-solid border-blue border-opacity-20 border-t-0 bg-origin-border border-b-1 bg-gradient-blue-white text-blue ' + className)}>
        <AccountCircleOutlinedIcon
          className={'absolute bottom-0 left-1/2 translate-y-1/2 bg-white rounded-full -translate-x-1/2 shadow-xl shadow-blue'}
          sx={{ fontSize: { sm: 26, xs: 20 } }}
        />
    </span>
  )
}