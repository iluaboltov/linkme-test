import { NotificationItem } from "@/components/notification-item";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const Header = () => {
  return (
    <header className={"flex flex-1 max-h-[30px] justify-between items-center "}>
      <h1 className={'tracking-wide text-3xl sm:text-4xl'}>Home</h1>
      <div className={'flex gap-4 items-center'}>
        <div className={'flex gap-2 text-primary items-center'}>
          <HelpOutlineIcon/>
          <NotificationItem/>
        </div>
        <div className={'flex items-center text-primary'}>
          <AccountCircleOutlinedIcon/>
        </div>
      </div>
    </header>
  )
}