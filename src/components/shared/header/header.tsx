import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const Header = () => {
  return (
    <header className={"flex flex-1 max-h-[30px] justify-between items-center "}>
      <h1 className={'tracking-wide'}>Home</h1>
      <div className={'flex gap-4 items-center'}>
        <div className={'space-x-2'}>
          <HelpOutlineIcon className={'text-[#454354]'} />
          <NotificationsNoneOutlinedIcon className={'text-[#454354]'} />
        </div>
        <div>
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </header>
  )
}